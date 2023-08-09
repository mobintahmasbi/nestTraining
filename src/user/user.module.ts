import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './entities/user.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [ MongooseModule.forFeature([{ name: User.name, schema: userSchema}]), AuthModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
