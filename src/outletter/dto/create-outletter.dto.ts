import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOutletterDto {
  @ApiProperty({ description: 'Отправитель ФИО' })
  @IsNotEmpty()
  sender: string;

  @ApiProperty({ description: 'Получатель ФИО' })
  @IsNotEmpty()
  receiver: string;

  @ApiProperty({ description: 'Адрес доставки' })
  @IsNotEmpty()
  address: string;

  @ApiProperty({ description: 'Тип отправления' })
  @IsNotEmpty()
  letterType: string;

  @ApiProperty({ description: 'Описание' })
  description: string;

  @ApiProperty({ description: 'Скан трек номера (при необходимости)' })
  appendFile?: string;

  @ApiProperty({ description: 'Дата' })
  date: number;

  @ApiProperty({ description: 'Исходящий номер' })
  outNumber: string;

  @ApiProperty({ description: 'Входящий номер' })
  inNumber: string;

  @ApiProperty({ description: 'Дата доставки' })
  dateOrder: string;

  @ApiProperty({ description: 'Исполнитель' })
  executor: string;

  @ApiProperty({ description: 'Краткое содержание письма' })
  letterTitle: string;

  @ApiProperty({ description: 'Ответ на письмо с входящим номером' })
  ResponseToIncoming: string;
}
