import { PartialType } from '@nestjs/swagger';
import { CreateOutletterDto } from './create-outletter.dto';

export class UpdateOutletterDto extends PartialType(CreateOutletterDto) {}
