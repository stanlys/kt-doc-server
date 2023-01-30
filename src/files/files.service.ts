import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

export enum FileType {
  IN = 'in',
  OUT = 'out',
}

@Injectable()
export class FilesService {
  createFile(type: FileType, fileName: string, file): string {
    try {
      const fileExtention = file.originalname.split('.').pop();
      const fullFileName = fileName + '.' + fileExtention;
      const filePath = path.resolve(__dirname, '..', 'static', type);
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.resolve(filePath, fullFileName), file.buffer);
      return type + '/' + fullFileName;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  removeFile(fileName: string) {
    try {
      fs.rmSync(fileName);
      return HttpStatus.OK;
    } catch (err) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
