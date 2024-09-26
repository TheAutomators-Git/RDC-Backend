import { Controller, Post, Get, Param, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, } from 'multer';
import { extname } from 'path';
import { Express } from 'express';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) { }

    @Post('add-question')
    @UseInterceptors(FileInterceptor('solutionImage'))  // This intercepts the file upload
    async addQuestion(
        @Body() createQuestionDto: CreateQuestionDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        // Handle image upload if necessary
        if (file) {
            createQuestionDto.segments = createQuestionDto.segments.map(segment => {
                if (segment.type === 'picture') {
                    segment.solutionImage = file.filename;
                }
                return segment;
            });
        }
        return this.quizService.addQuestion(createQuestionDto);
    }

    @Get('question/:id')
    getQuestionById(@Param('id') id: number) {
        return this.quizService.getQuestionById(id);
    }

    // @Post('upload-image')
    // @UseInterceptors(FileInterceptor('file', {
    //     storage: diskStorage({
    //         destination: './public/images', // Specify upload directory
    //         filename: (req, file, callback) => {
    //             const ext = extname(file.originalname);
    //             const filename = `${Date.now()}${ext}`;
    //             callback(null, filename);
    //         },
    //     }),
    // }))
    // uploadImage(@UploadedFile() file: Multer.File) {
    //     return { filename: file.filename };  // Return the uploaded image file name
    // }
}
