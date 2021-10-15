import { Module } from '@nestjs/common';
import { WorkGroupService } from './work-group.service';
import { WorkGroupController } from './work-group.controller';

@Module({
  controllers: [WorkGroupController],
  providers: [WorkGroupService]
})
export class WorkGroupModule {}
