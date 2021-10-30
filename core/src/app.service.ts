import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(private database: DatabaseService) {}
  getDashboard(userId: number) {
    const date = new Date();

    return this.database.work.findMany({
      where: {
        dueDate: {
          gte: date,
        },
        OR: [
          {
            creatorId: userId,
          },
          {
            group: {
              subscribers: {
                some: {
                  userId: userId,
                },
              },
            },
          },
        ],
      },
      include: {
        group: true,
      },
      orderBy: {
        dueDate: 'asc',
      },
    });
  }
}
