import { ApiProperty } from '@nestjs/swagger';
import { Date } from 'mongoose';

export class CreateLetterDto {
  @ApiProperty({ description: 'Отправитель ФИО' })
  sender: string;

  @ApiProperty({ description: 'Получатель ФИО' })
  receiver: string;

  @ApiProperty({ description: 'Дата отправки' })
  date: Date;

  @ApiProperty({ description: 'Адрес доставки' })
  address: string;

  @ApiProperty({ description: 'Тип отправления' })
  letterType: string;

  @ApiProperty({ description: 'Трек номер' })
  trackNumber: string;

  @ApiProperty({ description: 'Служба доставки' })
  postman: string;

  @ApiProperty({ description: 'Скан трек номера (при необходимости)' })
  appendFile?: string;
}
