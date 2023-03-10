import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Date } from 'mongoose';

export class CreatePostLetterDto {
  @ApiProperty({ description: 'Отправитель ФИО' })
  @IsNotEmpty()
  sender: string;

  @ApiProperty({ description: 'Получатель ФИО' })
  @IsNotEmpty()
  receiver: string;

  @ApiProperty({ description: 'Дата отправки' })
  @IsNotEmpty()
  date: Date;

  @ApiProperty({ description: 'Адрес доставки' })
  @IsNotEmpty()
  address: string;

  @ApiProperty({ description: 'Тип отправления' })
  @IsNotEmpty()
  letterType: string;

  @ApiProperty({ description: 'Краткое описание отправления' })
  @IsNotEmpty()
  letterDescription: string;

  @ApiProperty({ description: 'Трек номер' })
  @IsNotEmpty()
  trackNumber: string;

  @ApiProperty({ description: 'Служба доставки' })
  @IsNotEmpty()
  readonly postman;

  @ApiProperty({ description: 'Скан трек номера (при необходимости)' })
  appendFile?: string;
}
