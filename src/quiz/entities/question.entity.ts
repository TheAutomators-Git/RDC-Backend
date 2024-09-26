import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Segment } from './segment.entity';

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany(() => Segment, segment => segment.question, { cascade: true })
    segments: Segment[];
}
