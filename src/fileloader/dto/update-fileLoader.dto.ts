import { ObjectId, Types } from 'mongoose';

export class UpdateFileUploadDTO {
  _id: Types.ObjectId;
  fileName: string;
  path: string;
  dateTime: string;
}
