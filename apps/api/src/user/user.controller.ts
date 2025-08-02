import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    description: 'List out all the customers'
  })
  @ApiResponse({
    status: 200,
    description: 'A list of all customers',
    type: CreateUserDto,
    isArray: true
  })
  @Get()
  getAllUsers() {
    console.log('All users');
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
  }
}
