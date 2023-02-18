import { PartialType } from '@nestjs/swagger';
import { ObjectId, Schema } from 'mongoose';
import { FileUploadDTO } from './create-fileLoader.dto';

export class UpdateFileUploadDTO extends PartialType(FileUploadDTO) {
  _id: string;
}
