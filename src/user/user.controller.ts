import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDTO } from './dto/createUserDto';

@Controller('api/user')
export class UserController {

    constructor(private readonly UserService: UserService) {}

    @Post()
    async createUser(@Body() createUserdto: createUserDTO) {
        return this.UserService.createUserS(createUserdto)
    }
}
