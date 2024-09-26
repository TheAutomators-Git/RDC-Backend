import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { Question } from './entities/question.entity';
import { Segment } from './entities/segment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Question, Segment]),  // Import the entities here
  ],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
