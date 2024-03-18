import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  ParseUUIDPipe,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdatePasswordDto } from './dtos/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  findUser(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.findOne(id);
  }

  @Get()
  findAllUsers() {
    return this.userService.find();
  }

  @Post()
  createUser(@Body(new ValidationPipe()) body: CreateUserDto) {
    const { login, password } = body;
    this.userService.create(login, password);
  }

  @Put('/:id')
  updateUser(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body(new ValidationPipe()) body: UpdatePasswordDto,
  ) {
    this.userService.update(id, body);
  }

  @Delete('/:id')
  removeUser(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.remove(id);
  }
}
