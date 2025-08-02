import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsOptional,
  IsEnum
} from 'class-validator';
import { ROLE } from 'src/user/type/role.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({ description: 'User name is a required field' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User Email is a required field. And it is Unique'
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description:
      'User Password is required field. User must provide at lease 6 digit password.'
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  @IsOptional()
  hashedRefreshToken: string;

  @ApiProperty({
    description: 'Role of the admin',
    enum: [ROLE.ADMIN, ROLE.SUPER_ADMIN]
  })
  @IsEnum(ROLE, {
    message: 'Role must be either admin or super_admin'
  })
  role: ROLE;
}
