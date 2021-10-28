import {Controller, Delete, Post} from '@nestjs/common';
import { PinsService } from './pins.service';

@Controller('pins')
export class PinsController {
  constructor(private readonly pinsService: PinsService) {}

  @Post(':id')
  async pin(){

  }

  @Delete(':id')
  async unpin(){

  }
}
