import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gameName: string;
    
    @Column()
    team1Name: string;

    @Column()
    team2Name: string;

    @Column()
    setsScore: string[];

    @Column()
    team1Score: number;

    @Column()
    team2Score: number;
}