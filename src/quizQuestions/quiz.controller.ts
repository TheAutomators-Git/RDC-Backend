import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) { }

    @Post('add-question')
    addQuestion(@Body() createQuestionDto: CreateQuestionDto) {
        return this.quizService.addQuestion(createQuestionDto);
    }

    @Get('question/:id')
    getQuestionById(@Param('id') id: number) {
        return this.quizService.getQuestionById(id);
    }
}
