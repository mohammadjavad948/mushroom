import {Controller, Get, Req, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {HttpAuthGuard} from "./auth/http-auth.guard";
import {Request} from "./types/request";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(HttpAuthGuard)
  @Get()
  getHello(@Req() req: Request): string {
    return this.appService.getDashboard(req.userId);
  }
}
