import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type OutLetterDocument = HydratedDocument<OutLetter>;

@ApiTags('Исходящие письма')
@Schema()
export class OutLetter {
  @ApiProperty({ description: 'Дата отправки' })
  @Prop()
  date: Date;

  @ApiProperty({ description: 'Номер исходящего' })
  @Prop()
  outNumber: string;

  @ApiProperty({ description: 'Отправитель' })
  @Prop()
  sender: string;

  @ApiProperty({ description: 'Получатель ФИО' })
  @Prop()
  receiver: string;

  @ApiProperty({ description: 'Адрес доставки' })
  @Prop()
  address: string;

  @ApiProperty({ description: 'Тип отправления' })
  @Prop()
  letterType: string;

  @ApiProperty({ description: 'Описание' })
  @Prop()
  description: string;

  @ApiProperty({ description: 'Скан документа' })
  @Prop()
  appendFile?: string;

  @ApiProperty({ description: 'Скан документа' })
  @Prop()
  appendFileAppendix?: string;

  @ApiProperty({ description: 'Входящий номер' })
  @Prop()
  inNumber: string;

  @ApiProperty({ description: 'Дата получения' })
  @Prop()
  dateOrder: string;

  @ApiProperty({ description: 'Исполнитель письма' })
  @Prop()
  executor: string;

  @ApiProperty({ description: 'Краткое описание письма' })
  @Prop()
  letterTitle: string;

  @ApiProperty({ description: 'Ответ на входящий номер' })
  @Prop()
  ResponseToIncoming: string;
}

export const OutLetterSchema = SchemaFactory.createForClass(OutLetter);
