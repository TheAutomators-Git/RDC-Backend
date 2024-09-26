export class CreateSegmentDto {
    type: string;  // 'picture' or 'equation'
    solutionText?: string;  // Optional, for equations or text-based segments
    solutionImage?: string;  // Optional, for image-based segments
}

