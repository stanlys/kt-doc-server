import { HttpStatus, Injectable } from '@nestjs/common';
import { FileUploadDTO } from './dto/create-fileLoader.dto';
import * as dayjs from 'dayjs';
import * as path from 'path';
import * as fs from 'fs';
import { ensureDir, writeFile, remove } from 'fs-extra';
import { InjectModel } from '@nestjs/mongoose';
import { FileLoader, FileLoaderDocument } from './schema/fileloader.schema';
import { Model } from 'mongoose';
import { UpdateFileUploadDTO } from './dto/update-fileLoader.dto';

@Injectable()
export class FileLoaderService {
  constructor(
    @InjectModel(FileLoader.name)
    private readonly FileLoader: Model<FileLoaderDocument>,
  ) {}

  async saveFile(file: Express.Multer.File): Promise<UpdateFileUploadDTO> {
    const dateFolder = dayjs().format('YYYY');
    const fileName = dayjs().format('YYYY-MM-DD-HHmmss');
    const uploadFolder = path.resolve(__dirname, '..', 'static', dateFolder);
    // const uploadFolder = `${path}/uploads/${dateFolder}`;
    await ensureDir(uploadFolder);
    const ext = file.originalname.split('.').pop();
    const shortFileName = `${fileName}.${ext}`;
    const filename = `${uploadFolder}/${shortFileName}`;
    await writeFile(filename, file.buffer);
    const createdDocument: FileUploadDTO = {
      fileName: shortFileName,
      path: `${dateFolder}/${shortFileName}`,
      dateTime: dayjs().toString(),
    };
    const document = await this.FileLoader.create(createdDocument);
    return document;
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
