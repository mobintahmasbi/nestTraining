import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDTO } from './dto/createUserDto';
import { loginUserDTO } from './dto/loginUserDto';

@Controller('api/user')
export class UserController {

    constructor(private readonly UserService: UserService) {}

    @Post('/login')
    async login(@Body() loginUserdto: loginUserDTO) {
        return this.UserService.loginUser(loginUserdto)
    }

    @Post('/register')
    async createUser(@Body() createUserdto: createUserDTO) {
        return this.UserService.createUserS(createUserdto)
    }

    @Get()
    async getcipher(@Body() cipher) {
        return this.UserService.createhash(cipher.txt)
    }
}
