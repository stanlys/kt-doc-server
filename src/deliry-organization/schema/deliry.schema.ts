import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Letter>;

@ApiTags('Организации для отправки почтовых сообщений')
@Schema()
export class Letter {
  @ApiProperty({ description: 'Наименование' })
  @Prop()
  name: string;

  @ApiProperty({ description: 'Сайт для отслеживания трека' })
  @Prop()
  website: string;

  @ApiProperty({ description: 'Телефон для связи' })
  @Prop()
  phone: string;
}

export const LetterSchema = SchemaFactory.createForClass(Letter);
