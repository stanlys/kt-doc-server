import { HttpStatus, Injectable } from '@nestjs/common';
import { FileUploadDTO } from './dto/create-fileLoader.dto';
import * as dayjs from 'dayjs';
import * as path from 'path';
import * as fs from 'fs';
import { ensureDir, writeFile, remove } from 'fs-extra';
import { InjectModel } from '@nestjs/mongoose';
import { FileLoader, FileLoaderDocument } from './schema/fileloader.schema';
import { Model, ObjectId, Types } from 'mongoose';
import { UpdateFileUploadDTO } from './dto/update-fileLoader.dto';

@Injectable()
export class FileLoaderService {
  constructor(
    @InjectModel(FileLoader.name)
    private readonly FileLoader: Model<FileLoaderDocument>,
  ) {}

  async saveFile(file: Express.Multer.File) {
    const dateFolder = dayjs().format('YYYY');
    const fileName = dayjs().format('YYYY-MM-DD-HHmmss');
    const uploadFolder = path.resolve(__dirname, '..', 'static', dateFolder);
    await ensureDir(uploadFolder);
    const ext = file.originalname.split('.').pop();
    const fileSize = file.size;
    const shortFileName = `${fileName}.${ext}`;
    const filename = `${uploadFolder}/${shortFileName}`;
    await writeFile(filename, file.buffer);
    const createdDocument: FileUploadDTO = {
      fileName: shortFileName,
      path: `${dateFolder}/${shortFileName}`,
      dateTime: dayjs().toDate(),
      size: fileSize,
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

  async getAllFiles() {
    console.log('get all');
    const documents = await this.FileLoader.find();
    return documents;
  }

  async getAllFilesByDate(date: string) {
    console.log(date);
    const documents = await this.FileLoader.find({}).where({
      dateTime: { $gte: dayjs(date).toDate() },
    });
    console.log(dayjs(date).toDate());
    return documents;
  }

  async deleteById(id: string) {
    console.log('->', id);
    const document = await this.FileLoader.findByIdAndDelete(id);
    return document;
  }

  async deleteAll() {
    await this.FileLoader.deleteMany({});
    return 'OK';
  }
}
