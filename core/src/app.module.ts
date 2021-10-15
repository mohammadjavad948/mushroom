import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {ConfigModule} from "@nestjs/config";
import { DatabaseModule } from './database/database.module';
import { WorkGroupModule } from './work-group/work-group.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), AuthModule, DatabaseModule, WorkGroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
