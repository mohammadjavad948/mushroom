import { Test, TestingModule } from '@nestjs/testing';
import { WorkGroupController } from './work-group.controller';
import { WorkGroupService } from './work-group.service';

describe('WorkGroupController', () => {
  let controller: WorkGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkGroupController],
      providers: [WorkGroupService],
    }).compile();

    controller = module.get<WorkGroupController>(WorkGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
