import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  Get,
  HttpStatus,
  InternalServerErrorException
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { RequestBodyForUser } from 'src/user/type/request-body';
import { LoginUserDTO } from './dto/login-user.dto';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';
import { Roles } from './decorators/roles.decorator';
import { ROLE } from 'src/user/type/role.enum';
import { Public } from './decorators/public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Create a new user',
    description:
      'This endpoint allows creating a new user with provided details.'
  })
  @ApiBody({ description: 'The user data to be created.', type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.'
  })
  @Post('customer/signup')
  async create(@Body() user: CreateUserDto) {
    return await this.authService.create(user);
  }

  @ApiOperation({
    summary: 'Create a new admin user',
    description:
      'This endpoint allows creating a new admin user with provided details.'
  })
  @ApiBody({
    description: 'The user data to be created.',
    type: CreateAdminDto
  })
  @ApiResponse({
    status: 201,
    description: 'The admin user has been successfully created.'
  })
  @Roles(ROLE.SUPER_ADMIN)
  @Post('admin/create')
  async createAdmin(@Body() admin: CreateAdminDto) {
    try {
      await this.authService.createAdmin(admin);
      return {
        status: HttpStatus.CREATED,
        message: 'Admin Created Successful.'
      };
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === 'object' &&
              err !== null &&
              'message' in err &&
              typeof (err as { message?: unknown }).message === 'string'
            ? (err as { message: string }).message
            : 'Something went wrong';
      throw new InternalServerErrorException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message
      });
    }
  }

  @ApiOperation({
    summary: 'Login api for the user',
    description: 'This endpoint allows login the user with provided details.'
  })
  @ApiBody({
    description: 'The user data to login',
    type: LoginUserDTO
  })
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: RequestBodyForUser) {
    return await this.authService.login(
      req.user.id,
      req.user.name,
      req.user.role
    );
  }

  @Get('signout')
  async signout(@Req() req: RequestBodyForUser) {
    try {
      await this.authService.signout(req.user.id);

      return {
        status: HttpStatus.OK,
        message: 'Signout Successful!'
      };
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Something went wrong.'
      });
    }
  }
}
