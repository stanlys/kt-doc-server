import { PartialType } from '@nestjs/swagger';
import { CreatePostLetterDto } from './create-letter.dto';

export class UpdatePostLetterDto extends PartialType(CreatePostLetterDto) {}
