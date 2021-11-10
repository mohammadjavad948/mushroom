import {HttpException, Injectable} from '@nestjs/common';
import {DatabaseService} from '../database/database.service';
import {HelperService} from '../helper/helper.service';
import {SubState} from "../types/subState";

@Injectable()
export class SubService {
  constructor(
    private database: DatabaseService,
    private helper: HelperService,
  ) {}

  async allSubs(userId: number) {
    return this.database.workGroup.findMany({
      where: {
        subscribers: {
          some: {
            userId: userId,
          },
        },
      },
    });
  }

  async sub(userId: number, groupId: number) {
    const isSubbed = await this.helper.isSubbed(userId, groupId);

    if (isSubbed) {
      throw new HttpException('subbed', 403);
    }

    const canSub = await this.helper.canSub(userId, groupId);

    if (!canSub) {
      throw new HttpException('nope', 403);
    }

    const workGroup = await this.database.workGroup.findUnique({
      where: {
        id: groupId,
      },
      rejectOnNotFound: true
    })

    return this.database.subscription.create({
      data: {
        groupId: groupId,
        userId: userId,
        state: workGroup.waitForAdminAccept ? SubState.waiting : SubState.accepted
      },
    });
  }

  async unsub(userId: number, groupId: number) {
    const isSubbed = await this.helper.isSubbed(userId, groupId);

    if (!isSubbed) {
      throw new HttpException('not subbed', 403);
    }

    return this.database.subscription.deleteMany({
      where: {
        userId: userId,
        groupId: groupId,
      },
    });
  }
}
