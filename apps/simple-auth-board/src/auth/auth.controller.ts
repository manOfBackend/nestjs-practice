import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    return this.authService
      .validateUser(body.username, body.password)
      .then((user) => this.authService.login(user));
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  getProfile(@Body() body: any) {
    return { message: 'Protected route', user: body.user };
  }
}
