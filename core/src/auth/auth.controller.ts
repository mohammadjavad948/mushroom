import {Controller, Get} from '@nestjs/common';
import {AuthService} from './auth.service';
import {ConfigService} from "@nestjs/config";

@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private readonly authService: AuthService, private config: ConfigService) {}

  @Get('login')
  login(){
    return 'hmm'
  }
}
