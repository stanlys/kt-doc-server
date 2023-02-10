import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type FileLoaderDocument = HydratedDocument<FileLoader>;

@ApiTags('Исходящие письма')
@Schema()
export class FileLoader {
  @ApiProperty({ description: 'Имя файла' })
  @Prop()
  fileName: string;

  @ApiProperty({ description: 'Полное имя файла' })
  @Prop()
  path: string;

  @ApiProperty({ description: 'Дата и время сохранения' })
  @Prop()
  dateTime: Date;

  @ApiProperty({ description: 'Размер файла' })
  @Prop()
  size: number;
}

export const FileLoaderSchema = SchemaFactory.createForClass(FileLoader);
