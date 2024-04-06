import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCounterDTO {
    
    @IsNotEmpty()
    @IsNumber()
    readonly counter: number;

    @IsString()
    readonly comment: string;
}