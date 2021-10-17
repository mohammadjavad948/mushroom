import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { HttpAuthGuard } from './http-auth.guard';
import { Request } from '../types/request';

@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.authService.login(body.username, body.password);
  }

  @Post('signup')
  signup(@Body() body: LoginDto) {
    return this.authService.signUp(body.username, body.password);
  }

  @UseGuards(HttpAuthGuard)
  @Get('info')
  info(@Req() req: Request) {
    return this.authService.userInfo(req.userId);
  }
}
