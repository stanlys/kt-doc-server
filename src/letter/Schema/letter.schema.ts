import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Letter>;

@ApiTags('Модель почтовоего отправления')
@Schema()
export class Letter {
  @ApiProperty({ description: 'Отправитель ФИО' })
  @Prop()
  fromFIO: string;

  @ApiProperty({ description: 'Получатель ФИО' })
  @Prop()
  toFIO: string;

  @ApiProperty({ description: 'Организация получатель' })
  @Prop()
  organization: string;

  @ApiProperty({ description: 'Адрес доставки' })
  @Prop()
  address: string;

  @ApiProperty({ description: 'Трек номер' })
  @Prop()
  trackNumber: string;

  @ApiProperty({ description: 'Служба доставки' })
  @Prop()
  deliveryService: string;

  @ApiProperty({ description: 'Скан трек номера (при необходимости)' })
  @Prop()
  appendFile?: string;
}

export const LetterSchema = SchemaFactory.createForClass(Letter);
