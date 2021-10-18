import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDashboard(userId: number): string {
    return 'Hello World!';
  }
}
