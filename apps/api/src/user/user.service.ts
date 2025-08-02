import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}
  async createNewUser(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userRepository.save({
      ...rest,
      password: hashedPassword
    });

    return user;
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({
      email
    });
  }

  async updateHashedToken(userId: number, hashedRT: string | null) {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user)
      throw new UnauthorizedException({
        status: HttpStatus.UNAUTHORIZED,
        message: 'User Not Found.'
      });

    user.hashedRefreshToken = hashedRT;

    await this.userRepository.save(user);
    return {
      success: true
    };
  }

  async findOne(userId: number) {
    return await this.userRepository.findOne({
      where: {
        id: userId
      }
    });
  }
}
