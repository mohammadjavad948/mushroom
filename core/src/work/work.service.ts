import {HttpException, Injectable} from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import {DatabaseService} from "../database/database.service";

@Injectable()
export class WorkService {
  constructor(private database: DatabaseService) {}
  async create(createWorkDto: CreateWorkDto, userId: number) {
    const can = await this.canManageGroup(userId, createWorkDto.groupId);

    if (!can){
      throw new HttpException('nope', 403);
    }
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

  async canManageGroup(userId: number, groupId: number){
    const group = await this.database.workGroup.count({
      where: {
        id: groupId,
        creatorId: userId,
      }
    });

    return group > 0
  }
}
