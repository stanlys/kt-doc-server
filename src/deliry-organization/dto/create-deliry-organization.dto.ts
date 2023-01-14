import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliryOrganizationDto {
  @ApiProperty({ description: 'Наименование' })
  name: string;

  @ApiProperty({ description: 'Сайт для отслеживания трека' })
  website: string;

  @ApiProperty({ description: 'Телефон для связи' })
  phone: string;
}
