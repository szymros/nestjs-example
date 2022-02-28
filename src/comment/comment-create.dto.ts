import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto{
    @IsNotEmpty()
    @IsNumber()
    parent_id: number;

    @IsNotEmpty()
    @IsString()
    contents: string;
}