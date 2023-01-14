import { ApiProperty } from '@nestjs/swagger';

export class CreateLetterDto {
  @ApiProperty({ description: 'Отправитель ФИО' })
  fromFIO: string;

  @ApiProperty({ description: 'Получатель ФИО' })
  toFIO: string;

  @ApiProperty({ description: 'Организация получатель' })
  organization: string;

  @ApiProperty({ description: 'Адрес доставки' })
  address: string;

  @ApiProperty({ description: 'Трек номер' })
  trackNumber: string;

  @ApiProperty({ description: 'Служба доставки' })
  deliveryService: string;

  @ApiProperty({ description: 'Скан трек номера (при необходимости)' })
  appendFile?: string;
}
