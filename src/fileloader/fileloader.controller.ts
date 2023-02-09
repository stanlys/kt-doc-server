import {
  Controller,
  Delete,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { FileLoaderService } from './fileloader.service';

@ApiTags('загрузка файлов')
@Controller('upload')
export class FileloaderController {
  constructor(private readonly filesService: FileLoaderService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('loading....');
    return this.filesService.saveFile(file);
  }

  @Post('1')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File) {
    console.log(file.originalname);
    return this.filesService.saveFile(file);
  }

  @Delete('11')
  deleteFile() {
    return this.filesService.deleteFile(
      '/Users/stan/Documents/Projects/kt-docs/kt-doc-server/uploads/2023/11.pdf',
    );
  }

  @Get()
  test() {
    return 'work!';
  }
}
