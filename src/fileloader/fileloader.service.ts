import { HttpStatus, Injectable, Post } from '@nestjs/common';
import { FileElementResponse } from './dto/fileResponse';
import * as dayjs from 'dayjs';
import { path } from 'app-root-path';
import { ensureDir, writeFile, remove } from 'fs-extra';

@Injectable()
export class FileLoaderService {
  async saveFile(file: Express.Multer.File): Promise<FileElementResponse> {
    const dateFolder = dayjs().format('YYYY');
    const fileName = dayjs().format('YYYY-MM-DD-HHmmss');
    const uploadFolder = `${path}/uploads/${dateFolder}`;
    await ensureDir(uploadFolder);
    const ext = file.originalname.split('.').pop();
    const shortFileName = `${fileName}.${ext}`;
    const filename = `${uploadFolder}/${shortFileName}`;
    await writeFile(filename, file.buffer);
    const res: FileElementResponse = {
      url: filename,
      name: shortFileName,
    };
    return res;
  }

  async deleteFile(filePath: string) {
    try {
      await remove(filePath);
      return HttpStatus.OK;
    } catch (e) {
      return HttpStatus.BAD_REQUEST;
    }

    return 'delete';
  }
}
