import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.schema';
import { Model } from 'mongoose';
import { createUserDTO } from './dto/createUserDto';
import { loginUserDTO } from './dto/loginUserDto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUserS(userobj: createUserDTO) {
    userobj.password = await this.createhash(userobj.password);
    return this.userModel.create(userobj);
  }

  async loginUser(loginUserdto: loginUserDTO) {
    const user = await this.userModel.findOne({ userName: loginUserdto.userName})
    let validatePassword = false 
    if (user) {
    validatePassword = await this.comparehash(loginUserdto.password, user.password)
    }
    return validatePassword ? user : false
  }

  async comparehash(password: string, hash: string){
    const validation = await bcrypt.compare(password, hash);
    return validation
  }

  async createhash(txt: string) {
    const saltOrRounds = 10;
    const password = txt;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash
  }
}
