import {Controller, Param, Patch, Req} from '@nestjs/common';
import { SubService } from './sub.service';
import {Request} from "../types/request";

@Controller('sub')
export class SubController {
  constructor(private readonly subService: SubService) {}

  @Patch('/:id')
  async sub(@Param('id') id: string, @Req() req: Request){

  }
}
