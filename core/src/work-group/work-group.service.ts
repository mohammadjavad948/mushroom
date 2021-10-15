import { Injectable } from '@nestjs/common';
import { CreateWorkGroupDto } from './dto/create-work-group.dto';
import { UpdateWorkGroupDto } from './dto/update-work-group.dto';
import {DatabaseService} from "../database/database.service";

@Injectable()
export class WorkGroupService {
  constructor(private database: DatabaseService) {}

  create(createWorkGroupDto: CreateWorkGroupDto, userId: number) {
    return this.database.workGroup.create({
      data: {
        color: createWorkGroupDto.color,
        isPrivate: createWorkGroupDto.isPrivate,
        name: createWorkGroupDto.name,
        creatorId: userId,
      }
    })
  }

  findAll(userId: number) {
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
