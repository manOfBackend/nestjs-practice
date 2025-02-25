import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type UserRole = 'admin' | 'user';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, username: 'test', password: bcrypt.hashSync('password', 10), role: 'user' },
    { id: 2, username: 'admin', password: bcrypt.hashSync('adminpassword', 10), role: 'admin' },
  ];

  async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
