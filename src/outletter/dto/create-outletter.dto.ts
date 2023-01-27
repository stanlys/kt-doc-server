import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOutletterDto {
  @ApiProperty({ description: 'Отправитель ФИО' })
  @IsNotEmpty()
  sender: string;

  @ApiProperty({ description: 'Получатель ФИО' })
  @IsNotEmpty()
  receiver: string;

  // @ApiProperty({ description: 'Дата отправки' })
  // @IsNotEmpty()
  // date: Date;

  @ApiProperty({ description: 'Адрес доставки' })
  @IsNotEmpty()
  address: string;

  @ApiProperty({ description: 'Тип отправления' })
  @IsNotEmpty()
  letterType: string;

  // @ApiProperty({ description: 'Трек номер' })
  // @IsNotEmpty()
  // outNumber: string;

  @ApiProperty({ description: 'Описание' })
  description: string;

  @ApiProperty({ description: 'Скан трек номера (при необходимости)' })
  appendFile?: string;
}
