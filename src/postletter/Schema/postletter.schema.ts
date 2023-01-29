import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import dayjs from 'dayjs';
import { HydratedDocument, now } from 'mongoose';

export type PostLetterDocument = HydratedDocument<PostLetter>;

@ApiTags('Модель почтового отправления')
@Schema()
export class PostLetter {
  @ApiProperty({ example: 'Иванов И.И.', description: 'Отправитель ФИО' })
  @Prop()
  sender: string;

  @ApiProperty({ example: 'Иванов И.И.', description: 'Получатель ФИО' })
  @Prop()
  receiver: string;

  @ApiProperty({ description: 'Дата отправки' })
  @Prop()
  date: Date;

  @ApiProperty({
    example: 'г. Воронеж, ул. Пролетарская 87В',
    description: 'Адрес доставки',
  })
  @Prop()
  address: string;

  @ApiProperty({ example: 'RU123456789', description: 'Трек номер' })
  @Prop()
  trackNumber: string;

  @ApiProperty({ example: 'Письмо', description: 'Тип отправления' })
  @Prop()
  letterType: string;

  @ApiProperty({ example: 'Почта РФ', description: 'Служба доставки' })
  @Prop()
  postman: string;

  @ApiProperty({ description: 'Скан трек номера (при необходимости)' })
  @Prop()
  appendFile?: string;
}

export const LetterSchema = SchemaFactory.createForClass(PostLetter);
