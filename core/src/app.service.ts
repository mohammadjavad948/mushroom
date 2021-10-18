import { Injectable } from '@nestjs/common';
import {DatabaseService} from "./database/database.service";

@Injectable()
export class AppService {
  constructor(private database: DatabaseService) {}
  getDashboard(userId: number): string {
    return this.database.work.findMany({
      where: {

      }
    });
  }
}
