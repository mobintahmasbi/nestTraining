import { IsString, IsNotEmpty } from "class-validator";

export class createUserDTO {

    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    email: string;
}