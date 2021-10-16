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

  findOne(id: number) {
    return `This action returns a #${id} work`;
  }

  update(id: number, updateWorkDto: UpdateWorkDto) {
    return `This action updates a #${id} work`;
  }

  remove(id: number) {
    return `This action removes a #${id} work`;
  }
}
