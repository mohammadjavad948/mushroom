import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import {DatabaseService} from "../database/database.service";

@Injectable()
export class WorkService {
  constructor(private database: DatabaseService) {}
  create(createWorkDto: CreateWorkDto, userId: number) {
    return 'This action adds a new work';
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
