import { Types } from 'mongoose';
import { FileUploadDTO } from './create-fileLoader.dto';

export class UpdateFileUploadDTO extends FileUploadDTO {
  _id: Types.ObjectId;
  // fileName: string;
  // path: string;
  // dateTime: string;
  // size: number;
}
