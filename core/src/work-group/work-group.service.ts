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
    return this.database.workGroup.findMany({
      where: {
        creator: {
          id: userId
        }
      }
    })
  }

  async findOne(id: number, userId: number) {
    return `This action returns a #${id} workGroup`;
  }

  update(id: number, updateWorkGroupDto: UpdateWorkGroupDto) {
    return `This action updates a #${id} workGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} workGroup`;
  }

  async canViewGroup(userId: number, groupId: number){
    const sub = await this.database.subscription.count({
      where: {
        userId,
        groupId
      }
    });

    const group = await this.database.workGroup.count({
      where: {
        id: groupId,
        creatorId: userId,
      }
    });

    return sub > 0 || group > 0
  }
}
