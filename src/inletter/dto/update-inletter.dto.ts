import { PartialType } from '@nestjs/swagger';
import { CreateInletterDto } from './create-inletter.dto';

export class UpdateInletterDto extends PartialType(CreateInletterDto) {}
