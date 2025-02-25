import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

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

  @Get('admin/dashboard')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('admin')
  getAdminDashboard() {
    return { message: '관리자 전용 대시보드' };
  }
}
