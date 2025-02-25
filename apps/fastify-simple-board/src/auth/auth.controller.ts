import { Controller, Post, Get, Body, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { FastifyRequest } from 'fastify';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { ResponseInterceptor } from '../common/interceptors/response.interceptor';

@UseInterceptors(ResponseInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    const { email, id, password } = await this.authService.register(body.email, body.password);
    return { email, id, password };
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: FastifyRequest) {
    return { user: (req as any).user };
  }
}
