import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileElementResponse } from './dto/fileResponse';
import { FileloaderService } from './fileloader.service';

@Controller('fileloader')
export class FileloaderController {
  constructor(private readonly filesService: FileloaderService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('files'))
  async uploadFile(
    @UploadedFiles() file: Express.Multer.File[],
  ): Promise<FileElementResponse[]> {
    return this.filesService.saveFile(file);
  }
}
