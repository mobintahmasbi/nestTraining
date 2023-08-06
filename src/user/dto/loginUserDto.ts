import { IsString, IsNotEmpty } from "class-validator";

export class loginUserDTO {

    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsString()
    password: string;

}