import {Controller, Delete, Param, Post, Req, UseGuards} from '@nestjs/common';
import { PinsService } from './pins.service';
import {HttpAuthGuard} from "../auth/http-auth.guard";
import {Request} from "../types/request";

@Controller('pins')
@UseGuards(HttpAuthGuard)
export class PinsController {
  constructor(private readonly pinsService: PinsService) {}

  @Post(':id')
  async pin(@Req() req: Request, @Param('id') id: string){
    return this.pinsService.pin(+id, req.userId);
  }

  @Delete(':id')
  async unpin(){

  }
}
