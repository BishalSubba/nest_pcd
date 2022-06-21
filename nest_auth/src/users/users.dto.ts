import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class UserDto {
    @IsString()
    @MaxLength(30)
    @MinLength(2)
    @IsNotEmpty()
    name: string;

    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(4)
    password: string;
}