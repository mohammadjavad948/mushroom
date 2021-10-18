import { Injectable } from '@nestjs/common';
import {DatabaseService} from "./database/database.service";

@Injectable()
export class AppService {
  constructor(private database: DatabaseService) {}
  getDashboard(userId: number) {
    return this.database.work.findMany({
      where: {
        OR: [
          {
            creatorId: userId,
          },
          {
            group: {
              subscribers: {
                some: {
                  userId: userId,
                }
              }
            }
          }
        ]
      }
    });
  }
}
