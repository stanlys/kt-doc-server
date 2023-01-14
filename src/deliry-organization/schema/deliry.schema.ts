import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type DeliveryDocument = HydratedDocument<Delivery>;

@ApiTags('Организации для отправки почтовых сообщений')
@Schema()
export class Delivery {
  @ApiProperty({ description: 'Наименование' })
  @Prop()
  orgname: string;

  @ApiProperty({ description: 'Сайт для отслеживания трека' })
  @Prop()
  website: string;

  @ApiProperty({ description: 'Телефон для связи' })
  @Prop()
  phone: string;
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);
