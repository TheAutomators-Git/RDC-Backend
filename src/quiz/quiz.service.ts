import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';
import { Segment } from './entities/segment.entity';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuizService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,  // Use InjectRepository
        @InjectRepository(Segment)
        private segmentRepository: Repository<Segment>,
    ) { }

    // async addQuestion(createQuestionDto: any) {
    //     const question = this.questionRepository.create(createQuestionDto);
    //     return await this.questionRepository.save(question);
    // }

    // constructor(
    //     @InjectRepository(Question) private questionRepository: Repository<Question>,
    //     @InjectRepository(Segment) private segmentRepository: Repository<Segment>,
    // ) { }

    // // Add a new question with segments
    async addQuestion(createQuestionDto: CreateQuestionDto) {
        const question = this.questionRepository.create({ title: createQuestionDto.title });
        await this.questionRepository.save(question);

        // Save each segment for this question
        for (const segmentDto of createQuestionDto.segments) {
            const segment = this.segmentRepository.create({
                type: segmentDto.type,
                solutionText: segmentDto.solutionText,
                solutionImage: segmentDto.solutionImage,
                question: question,
            });
            await this.segmentRepository.save(segment);
        }
        return { message: 'Question added successfully' };
    }

    // Get question by ID with all segments
    async getQuestionById(questionId: number) {
        return this.questionRepository.findOne({ where: { id: questionId }, relations: ['segments'] });
    }

    async getAllQuestions() {
        const questions = await this.questionRepository.find({ relations: ['segments'] });
        return questions || [];  // Ensure an array is always returned, even if there are no questions
    }

}
