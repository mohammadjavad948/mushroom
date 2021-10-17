import {Controller, Param, Patch, Req, UseGuards} from '@nestjs/common';
import { SubService } from './sub.service';
import {Request} from "../types/request";
import {HttpAuthGuard} from "../auth/http-auth.guard";

@UseGuards(HttpAuthGuard)
@Controller('sub')
export class SubController {
  constructor(private readonly subService: SubService) {}

  @Patch('/:id')
  async sub(@Param('id') id: string, @Req() req: Request){

  }
}
