import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User } from './user.interface';
import { userDB } from 'src/db/fakeDB';
import { UpdatePasswordDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  create(login, password) {
    const id = uuidv4();
    const date = Date.now();

    const newUser = {
      id,
      login,
      password,
      version: 1,
      createdAt: date,
      updatedAt: date,
    };

    userDB.push(newUser);
    return newUser;
  }

  update(id: string, updatePasswordDto: UpdatePasswordDto) {
    const user = userDB.find((user) => user.id === id);
    const { oldPassword, newPassword } = updatePasswordDto;

    if (!user) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    if (user.password !== oldPassword) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    user.password = newPassword;
    user.updatedAt = Date.now();
    user.version += 1;
    return user;
  }

  find(): User[] {
    return userDB;
  }

  findOne(id: string): User {
    return userDB.find((user) => user.id === id);
  }

  remove(id: string) {
    // const user = this.findOne(id);
    const userIndex = userDB.findIndex((user) => user.id === id);

    if (userIndex) {
      userDB.splice(userIndex, 1);
      return true;
    }

    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }
}
