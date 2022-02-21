import { Controller, Get, UseGuards, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { authService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly authservice: authService
    ) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req){
    return this.authservice.login(req.user);
  }
}
