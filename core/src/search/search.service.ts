import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class SearchService {
  constructor(private database: DatabaseService) {}

  async search(query: string) {
    return this.database.workGroup.findMany({
      where: {
        isPrivate: false,
        name: {
          contains: query,
        },
      },
    });
  }
}
