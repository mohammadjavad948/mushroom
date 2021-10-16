import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {ConfigModule} from "@nestjs/config";
import { DatabaseModule } from './database/database.module';
import { WorkGroupModule } from './work-group/work-group.module';
import { WorkModule } from './work/work.module';
import { HelperService } from './helper/helper.service';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), AuthModule, DatabaseModule, WorkGroupModule, WorkModule],
  controllers: [AppController],
  providers: [AppService, HelperService],
})
export class AppModule {}
