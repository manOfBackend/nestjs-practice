import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  private users: User[] = [];

  constructor(private jwtService: JwtService) {}

  async register(email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: this.users.length + 1, email, password: hashedPassword };
    this.users.push(user);
    return user;
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = this.users.find((u) => u.email === email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async login(email: string, password: string): Promise<string | null> {
    const user = await this.validateUser(email, password);
    if (!user) return null;

    return this.jwtService.sign({ userId: user.id, email: user.email });
  }
}
