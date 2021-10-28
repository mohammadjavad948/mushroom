import { Module } from '@nestjs/common';
import { PinsService } from './pins.service';
import { PinsController } from './pins.controller';

@Module({
  controllers: [PinsController],
  providers: [PinsService]
})
export class PinsModule {}
