import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Segment } from './segment.entity';

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;  // Title or prompt of the question

    @OneToMany(() => Segment, segment => segment.question)
    segments: Segment[];
}
