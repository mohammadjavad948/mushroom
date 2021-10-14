import {Controller, Get} from '@nestjs/common';
import {AuthService} from './auth.service';

@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('hmm')
  hmm(){
    return 'hmm'
  }
}
