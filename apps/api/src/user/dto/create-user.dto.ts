import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsOptional,
  IsEnum
} from 'class-validator';
import { ROLE } from '../type/role.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
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
    description:
      'User Role is Optional field. By default User will be marked as User'
  })
  @ApiPropertyOptional({
    enum: [ROLE.USER],
    default: ROLE.USER,
    description: 'Role will always be user for public signup'
  })
  @IsEnum(ROLE)
  @IsOptional()
  role: ROLE = ROLE.USER;
}
