import { Injectable } from '@nestjs/common';
import { CreateWorkGroupDto } from './dto/create-work-group.dto';
import { UpdateWorkGroupDto } from './dto/update-work-group.dto';

@Injectable()
export class WorkGroupService {
  create(createWorkGroupDto: CreateWorkGroupDto) {
    return 'This action adds a new workGroup';
  }

  findAll() {
    return `This action returns all workGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workGroup`;
  }

  update(id: number, updateWorkGroupDto: UpdateWorkGroupDto) {
    return `This action updates a #${id} workGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} workGroup`;
  }
}
