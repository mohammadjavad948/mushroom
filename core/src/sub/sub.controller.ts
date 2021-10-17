import {Controller, Get, Param, Patch, Req, UseGuards} from '@nestjs/common';
import { SubService } from './sub.service';
import {Request} from "../types/request";
import {HttpAuthGuard} from "../auth/http-auth.guard";

@UseGuards(HttpAuthGuard)
@Controller('sub')
export class SubController {
  constructor(private readonly subService: SubService) {}

  @Get()
  async subs(@Req() req: Request){

  }

  @Patch('/:id')
  async sub(@Param('id') id: string, @Req() req: Request){

  }

  @Patch('/unsub/:id')
  async unsub(@Param('id') id: string, @Req() req: Request){

  }
}
