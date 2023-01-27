import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';
import { CreateOutletterDto } from './create-outletter.dto';

export class UpdateOutletterDto extends PartialType(CreateOutletterDto) {
  @ApiProperty({ description: 'Трек номер' })
  @IsNotEmpty()
  outNumber: string;

  @ApiProperty({ description: 'Дата отправки' })
  @IsNotEmpty()
  date: Date;

  @ApiProperty({ description: 'ID' })
  @IsNotEmpty()
  _id: ObjectId;
}
