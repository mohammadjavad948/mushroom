import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {AuthService} from "./auth.service";

@Injectable()
export class HttpAuthGuard implements CanActivate {
  constructor(private database: DatabaseService, private auth: AuthService) {}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    return true;
  }
}
