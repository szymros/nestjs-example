import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import {feedObjModule } from './FeedObj/feedObj.module'
import { userModule } from './user/user.module';
import { authModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      }),
      feedObjModule,
      userModule,
      authModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
