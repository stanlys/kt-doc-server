import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { UpdateFileUploadDTO } from './dto/update-fileLoader.dto';
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
  getAllDocuments() {
    return this.filesService.getAllFiles();
  }

  @Get('date')
  getAllFileByDate(@Query('date') date: string) {
    return this.filesService.getAllFilesByDate(date);
  }

  @Delete()
  deleteAll() {
    return this.filesService.deleteAll();
  }
}
