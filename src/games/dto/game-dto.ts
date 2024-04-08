import { IsNotEmpty, IsNumber, IsString, isNumber } from "class-validator";

export class GameDTO {

    @IsString()
    gameName: string;
    
    @IsString()
    team1Name: string;

    @IsString()
    team2Name: string;

    @IsString()
    setsScore: string[];

    @IsNumber()
    team1Score: number;

    @IsNumber()
    team2Score: number;
}