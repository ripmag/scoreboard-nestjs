import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Counter {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    counter: number;

    @Column()
    comment: string;
}