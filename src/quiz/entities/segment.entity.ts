import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class Segment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;  // 'equation' or 'picture'

    @Column({ nullable: true })
    solutionText: string;

    @Column({ nullable: true })
    solutionImage: string;

    @ManyToOne(() => Question, question => question.segments)
    question: Question;
}
