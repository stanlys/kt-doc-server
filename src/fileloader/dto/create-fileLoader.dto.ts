import { Dayjs } from 'dayjs';
import { Date } from 'mongoose';

export class FileUploadDTO {
  fileName: string;
  path: string;
  readonly dateTime;
  size: number;
}
