import {
  ConflictException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import refreshConfig from 'src/config/refresh.config';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { JwtPayload } from 'src/user/type/auth-jwt';
import { ROLE } from 'src/user/type/role.enum';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @Inject(refreshConfig.KEY)
    private readonly refreshTokenConfig: ConfigType<typeof refreshConfig>
  ) {}

  private throwUnauthorized(message: string) {
    throw new UnauthorizedException({
      status: HttpStatus.UNAUTHORIZED,
      message
    });
  }

  private throwConflict(message: string) {
    throw new ConflictException({
      status: HttpStatus.CONFLICT,
      message
    });
  }

  async create(userDto: CreateUserDto) {
    const user = await this.userService.findByEmail(userDto.email);
    if (user) this.throwConflict('Email is already exists.');

    const newUser = await this.userService.createNewUser({
      ...userDto,
      role: ROLE.USER
    });
    const { accessToken, refreshToken } = await this.generateToken(
      newUser.id,
      newUser.role
    );
    return {
      id: newUser.id,
      name: newUser.name,
      role: newUser.role,
      accessToken,
      refreshToken
    };
  }

  async createAdmin(admin: CreateUserDto) {
    const user = await this.userService.findByEmail(admin.email);
    if (user) {
      return this.throwConflict('Email is already exists.');
    }

    await this.userService.createNewUser(admin);

    return {
      message: 'User created Successful.'
    };
  }

  async login(userId: number, name: string, role: ROLE) {
    const { accessToken, refreshToken } = await this.generateToken(
      userId,
      role
    );
    return {
      id: userId,
      name,
      role,
      accessToken,
      refreshToken
    };
  }

  async generateToken(userId: number, role: ROLE) {
    const payload: JwtPayload = { sub: userId, role };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshTokenConfig)
    ]);

    const hashedRT = await bcrypt.hash(refreshToken, 10);
    await this.userService.updateHashedToken(userId, hashedRT);
    return {
      accessToken,
      refreshToken
    };
  }

  async validateLocalUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      return this.throwUnauthorized('User Not Found!');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched)
      throw new ConflictException({
        status: HttpStatus.CONFLICT,
        message: 'Invalid Credentials!'
      });
    return { id: user.id, name: user.name, role: user.role };
  }

  async validateJwtUser(userId: number) {
    const user = await this.userService.findOne(userId);

    if (!user) {
      return this.throwUnauthorized('User Not Found!');
    }

    return {
      id: user.id,
      role: user.role
    };
  }

  async validateRefreshToken(userId: number, refreshToken: string) {
    const user = await this.userService.findOne(userId);

    if (!user) {
      return this.throwUnauthorized('User not found!');
    }

    if (!user.hashedRefreshToken) {
      return this.throwUnauthorized('Refresh Token not found');
    }

    const refreshTokenMatched = await bcrypt.compare(
      refreshToken,
      user.hashedRefreshToken
    );

    if (!refreshTokenMatched) {
      return this.throwUnauthorized('Refresh token does not match.');
    }

    return {
      id: user.id,
      role: user.role
    };
  }

  async refreshToken(userId: number, name: string | null, role: ROLE) {
    const { accessToken, refreshToken } = await this.generateToken(
      userId,
      role
    );

    return {
      id: userId,
      name,
      accessToken,
      refreshToken
    };
  }

  async signout(userId: number) {
    return this.userService.updateHashedToken(userId, null);
  }
}
