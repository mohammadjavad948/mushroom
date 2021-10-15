import {Body, Controller, Get} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LoginDto} from "./dto/login.dto";

@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  login(@Body() body: LoginDto){
    return this.authService.login(body.username, body.password)
  }
}
