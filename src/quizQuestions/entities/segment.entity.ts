import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class Segment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;  // 'picture' or 'equation'

    @Column({ nullable: true })
    solutionText: string;  // String input for equation or other answer

    @Column({ nullable: true })
    solutionImage: string;  // Store path for image if it's a picture

    @ManyToOne(() => Question, question => question.segments)
    question: Question;
}
