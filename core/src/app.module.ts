import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { WorkGroupModule } from './work-group/work-group.module';
import { WorkModule } from './work/work.module';
import { HelperModule } from './helper/helper.module';
import { SubModule } from './sub/sub.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DatabaseModule,
    WorkGroupModule,
    WorkModule,
    HelperModule,
    SubModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
