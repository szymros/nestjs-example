import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    username!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    second_name?: string;
}