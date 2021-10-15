import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {AuthService} from "./auth.service";
import {Request} from "../types/request";

@Injectable()
export class HttpAuthGuard implements CanActivate {
  constructor(private database: DatabaseService, private auth: AuthService) {}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const token = context.switchToHttp().getRequest<Request>().headers?.auth;

    try {
      const payload = await this.auth.checkToken(token);

      const user = await this.database.user.findUnique({
        where: {
          id: payload.id,
        }
      });

      return true;

    } catch (e) {
      return false
    }
  }
}
