import {HttpException, Injectable} from '@nestjs/common';
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
    const can = await this.canViewGroup(userId, id);

    if (!can) {
      throw new HttpException('nope', 403);
    }

    return this.database.workGroup.findUnique({
      where: {
        id: id,
      },
      include: {
        works: true
      }
    });
  }


  async update(id: number, updateWorkGroupDto: UpdateWorkGroupDto, userId: number) {
    const can = await this.canManageGroup(userId, id);

    if (!can) {
      throw new HttpException('nope', 403);
    }

    return this.database.workGroup.update({
      where: {
        id: id,
      },
      data: {
        color: updateWorkGroupDto.color,
        isPrivate: updateWorkGroupDto.isPrivate,
        name: updateWorkGroupDto.name
      }
    })
  }

  async remove(id: number, userId: number) {
    const can = await this.canManageGroup(userId, id);

    if (!can) {
      throw new HttpException('nope', 403);
    }

    return this.database.workGroup.delete({
      where: {
        id: id,
      }
    })
  }

  async canManageGroup(userId: number, groupId: number){
    const group = await this.database.workGroup.count({
      where: {
        id: groupId,
        creatorId: userId,
      }
    });

    return group > 0
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
