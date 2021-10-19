import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class HelperService {
  constructor(private database: DatabaseService) {}

  async canManageGroup(userId: number, groupId: number) {
    const group = await this.database.workGroup.count({
      where: {
        id: groupId,
        creatorId: userId,
      },
    });

    return group > 0;
  }

  async canViewGroup(userId: number, groupId: number) {
    const sub = await this.database.subscription.count({
      where: {
        userId,
        groupId,
      },
    });

    const group = await this.database.workGroup.count({
      where: {
        id: groupId,
        creatorId: userId,
      },
    });

    return sub > 0 || group > 0;
  }

  async canViewWork(userId: number, workId: number) {
    /*
     * the following query checks two things:
     * 1 - check if the user is the owner of the workGroup
     * ------------------ OR ---------------------------
     * 2 - check if the workGroup is public
     */
    const count = await this.database.workGroup.count({
      where: {
        OR: [
          {
            creatorId: userId,
            works: {
              some: {
                id: workId,
              },
            },
          },
          {
            isPrivate: false,
            works: {
              some: {
                id: workId,
              },
            },
          },
        ],
      },
    });

    return count > 0;
  }

  async canManageWork(userId: number, workId: number) {
    const count = await this.database.workGroup.count({
      where: {
        creatorId: userId,
        works: {
          some: {
            id: workId,
          },
        },
      },
    });

    return count > 0;
  }

  async isSubbed(userId: number, groupId: number){
    const count = await this.database.workGroup.count({
      where: {
        subscribers: {
          some: {
            userId: userId
          }
        },
        id: groupId,
      }
    });

    return count > 0
  }

  async canCreatePublicGroup(userId: number){
    const user = await this.database.user.findUnique({
      where: {
        id: userId,
      }
    });

    return user?.canCreatePublicWorkGroup;
  }
}
