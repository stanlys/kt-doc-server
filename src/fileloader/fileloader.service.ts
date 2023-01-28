import { Injectable } from '@nestjs/common';
import { FileElementResponse } from './dto/fileResponse';
import * as dayjs from 'dayjs';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';

@Injectable()
export class FileloaderService {
  async saveFile(files: Express.Multer.File[]): Promise<FileElementResponse[]> {
    const dateFolder = dayjs().format('YYYY');
    const uploadFolder = `${path}/uploads/${dateFolder}`;
    await ensureDir(uploadFolder);
    const res: FileElementResponse[] = [];
    for (const file of files) {
      const filename = `${uploadFolder}/${file.originalname}`;
      await writeFile(filename, file.buffer);
      res.push({ url: filename, name: file.originalname });
    }
    return res;
  }
}
