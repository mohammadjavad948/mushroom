import { HttpException, Injectable } from '@nestjs/common';
import { CreateWorkGroupDto } from './dto/create-work-group.dto';
import { UpdateWorkGroupDto } from './dto/update-work-group.dto';
import { DatabaseService } from '../database/database.service';
import { HelperService } from '../helper/helper.service';

@Injectable()
export class WorkGroupService {
  constructor(
    private database: DatabaseService,
    private helper: HelperService,
  ) {}

  async create(createWorkGroupDto: CreateWorkGroupDto, userId: number) {
    const can = await this.helper.canCreatePublicGroup(userId);

    if (!can && !createWorkGroupDto.isPrivate){
      throw new HttpException('you cant.', 403)
    }

    return this.database.workGroup.create({
      data: {
        color: createWorkGroupDto.color,
        isPrivate: createWorkGroupDto.isPrivate,
        name: createWorkGroupDto.name,
        creatorId: userId,
      },
    });
  }

  findAll(userId: number) {
    return this.database.workGroup.findMany({
      where: {
        creator: {
          id: userId,
        },
      },
    });
  }

  async findOne(id: number, userId: number) {
    const can = await this.helper.canViewGroup(userId, id);

    if (!can) {
      throw new HttpException('nope', 403);
    }

    return this.database.workGroup.findUnique({
      where: {
        id: id,
      },
      include: {
        works: {
          orderBy: [
            {
              dueDate: "asc"
            }
          ]
        }
      },
    });
  }

  async update(
    id: number,
    updateWorkGroupDto: UpdateWorkGroupDto,
    userId: number,
  ) {
    const can = await this.helper.canManageGroup(userId, id);

    if (!can) {
      throw new HttpException('nope', 403);
    }

    const canCreate = await this.helper.canCreatePublicGroup(userId);

    if (!canCreate && !updateWorkGroupDto.isPrivate){
      throw new HttpException('you cant.', 403)
    }

    return this.database.workGroup.update({
      where: {
        id: id,
      },
      data: {
        color: updateWorkGroupDto.color,
        isPrivate: updateWorkGroupDto.isPrivate,
        name: updateWorkGroupDto.name,
      },
    });
  }

  async remove(id: number, userId: number) {
    const can = await this.helper.canManageGroup(userId, id);

    if (!can) {
      throw new HttpException('nope', 403);
    }

    return this.database.workGroup.delete({
      where: {
        id: id,
      },
    });
  }
}
