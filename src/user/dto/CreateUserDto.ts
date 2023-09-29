import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: 'Required!!!!'})
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}
