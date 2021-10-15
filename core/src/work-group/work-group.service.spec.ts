import { Test, TestingModule } from '@nestjs/testing';
import { WorkGroupService } from './work-group.service';

describe('WorkGroupService', () => {
  let service: WorkGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkGroupService],
    }).compile();

    service = module.get<WorkGroupService>(WorkGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
