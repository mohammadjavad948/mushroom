import {HttpException, Injectable} from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import {DatabaseService} from "../database/database.service";
import {HelperService} from "../helper/helper.service";

@Injectable()
export class WorkService {
  constructor(private database: DatabaseService, private helper: HelperService) {}
  async create(createWorkDto: CreateWorkDto, userId: number) {
    const can = await this.helper.canManageGroup(userId, createWorkDto.groupId);

    if (!can){
      throw new HttpException('nope', 403);
    }

    return this.database.work.create({
      data: {
        creatorId: userId,
        description: createWorkDto.description,
        dueDate: createWorkDto.dueDate,
        groupId: createWorkDto.groupId,
        title: createWorkDto.title,
      }
    })
  }

  async findOne(id: number, userId: number) {
    const can = await this.helper.canViewWork(userId, id);

    if (!can){
      throw new HttpException('nope', 403);
    }

    return this.database.work.findUnique({
      where: {
        id: id,
      }
    })
  }

  async update(id: number, updateWorkDto: UpdateWorkDto, userId: number) {
    const can = await this.helper.canManageWork(userId, id);

    if (!can){
      throw new HttpException('nope', 403);
    }

    return this.database.work.update({
      where: {
        id: id
      },
      data: {
        description: updateWorkDto.description,
        dueDate: updateWorkDto.dueDate,
        title: updateWorkDto.title,
      }
    })
  }

  async remove(id: number, userId: number) {
    const can = await this.helper.canManageWork(userId, id);

    if (!can){
      throw new HttpException('nope', 403);
    }

    return this.database.work.delete({
      where: {
        id: id
      }
    })
  }
}
