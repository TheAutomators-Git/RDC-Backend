import { CreateSegmentDto } from './create-segment.dto';

export class CreateQuestionDto {
    title: string;
    segments: CreateSegmentDto[];
}
