import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type FileUploaderDocument = HydratedDocument<FileUploader>;

@ApiTags('Исходящие письма')
@Schema()
export class FileUploader {
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

export const FileUploaderSchema = SchemaFactory.createForClass(FileUploader);
