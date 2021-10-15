import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LoginDto} from "./dto/login.dto";

@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: LoginDto){
    return this.authService.login(body.username, body.password)
  }

  @Post('signup')
  signup(@Body() body: LoginDto){
    return this.authService.signUp(body.username, body.password)
  }
}
