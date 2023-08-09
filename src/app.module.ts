import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    TaskModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/userManagement'),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
