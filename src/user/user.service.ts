import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.schema';
import { Model } from 'mongoose';
import { createUserDTO } from './dto/createUserDto';

@Injectable()
export class UserService {
    
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async createUserS(userobj: createUserDTO){
        return this.userModel.create(userobj)
    }


}
