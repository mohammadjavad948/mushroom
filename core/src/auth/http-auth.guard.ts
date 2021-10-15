import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class HttpAuthGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    return true;
  }
}
