import { HttpException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { HelperService } from '../helper/helper.service';

@Injectable()
export class PinsService {
  constructor(
    private database: DatabaseService,
    private helper: HelperService,
  ) {}

  async getPins(groupId: number, userId){
    const can = await this.helper.canViewGroup(userId, groupId);

    if (!can){
      throw new HttpException('you cant', 403);
    }

    return this.database.pin.findMany({
      where: {
        workGroupId: groupId,
      },
      include: {
        work: true
      }
    })
  }

  async pin(workId: number, userId: number) {
    const can = await this.helper.canManageWork(userId, workId);

    if (!can) {
      throw new HttpException('you cant', 403);
    }

    const isPinned = await this.helper.isPinned(workId);

    if (isPinned) {
      throw new HttpException('you cant', 403);
    }

    const work = await this.database.work.findUnique({
      where: {
        id: workId,
      },
    });

    return this.database.pin.create({
      data: {
        workGroupId: work.groupId,
        workId: workId,
      },
    });
  }

  async unpin(workId: number, userId: number) {
    const can = await this.helper.canManageWork(userId, workId);

    if (!can) {
      throw new HttpException('you cant', 403);
    }

    const isPinned = await this.helper.isPinned(workId);

    if (!isPinned) {
      throw new HttpException('is not pinned', 403);
    }

    return this.database.pin.deleteMany({
      where: {
        workId: workId,
      },
    });
  }
}
