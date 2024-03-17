import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdatePasswordDto } from './dtos/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get()
  findAllUsers() {
    return this.userService.find();
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    const { login, password } = body;
    this.userService.create(login, password);
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdatePasswordDto) {
    this.userService.update(id, body);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
