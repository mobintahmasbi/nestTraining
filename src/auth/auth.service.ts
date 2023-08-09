import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService){}
    async generateToken(userObj: any){
        const token = await this.jwtService.signAsync({
            userName: userObj.userName,
            password: userObj.password,
            email: userObj.email,
            _id: userObj._id.toString()
        })
        return token
    }
}
