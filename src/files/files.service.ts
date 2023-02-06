import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

export enum FileType {
  IN = 'in',
  OUT = 'out',
}

@Injectable()
export class FilesService {
  createFile(type: FileType, fileName: string, file): string {
    try {
      console.log(fileName);
      //const fileExtention = fileName.split('.').pop();
      //const fullFileName = fileName + '.' + fileExtention;
      const filePath = path.resolve(__dirname, '..', 'static', type);
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
      console.log(type + '/' + fileName);
      return type + '/' + fileName;
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
