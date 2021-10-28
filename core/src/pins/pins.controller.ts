import {Controller, Delete, Post, UseGuards} from '@nestjs/common';
import { PinsService } from './pins.service';
import {HttpAuthGuard} from "../auth/http-auth.guard";

@Controller('pins')
@UseGuards(HttpAuthGuard)
export class PinsController {
  constructor(private readonly pinsService: PinsService) {}

  @Post(':id')
  async pin(){

  }

  @Delete(':id')
  async unpin(){

  }
}
