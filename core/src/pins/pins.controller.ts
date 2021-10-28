import { Controller } from '@nestjs/common';
import { PinsService } from './pins.service';

@Controller('pins')
export class PinsController {
  constructor(private readonly pinsService: PinsService) {}
}
