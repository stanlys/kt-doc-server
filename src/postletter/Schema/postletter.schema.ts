import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type PostLetterDocument = HydratedDocument<PostLetter>;

@ApiTags('Модель почтовоего отправления')
@Schema()
export class PostLetter {
  @ApiProperty({ description: 'Отправитель ФИО' })
  @Prop()
  sender: string;

  @ApiProperty({ description: 'Получатель ФИО' })
  @Prop()
  receiver: string;

  @ApiProperty({ description: 'Дата отправки' })
  @Prop()
  date: Date;

  @ApiProperty({ description: 'Адрес доставки' })
  @Prop()
  address: string;

  @ApiProperty({ description: 'Трек номер' })
  @Prop()
  trackNumber: string;

  @ApiProperty({ description: 'Тип отправления' })
  @Prop()
  letterType: string;

  @ApiProperty({ description: 'Служба доставки' })
  @Prop()
  postman: string;

  @ApiProperty({ description: 'Скан трек номера (при необходимости)' })
  @Prop()
  appendFile?: string;
}

export const LetterSchema = SchemaFactory.createForClass(PostLetter);
