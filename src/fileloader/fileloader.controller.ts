import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
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

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   console.log('delete by Id');
  //   return this.filesService.deleteById(id);
  // }

  @Get(':id')
  getting(@Param('id') id: string) {
    return console.log(id);
  }

  // @Get('date')
  // getAllFileByDate(@Query('date') date: string) {
  //   return this.filesService.getAllFilesByDate(date);
  // }

  @Get()
  getAllDocuments() {
    return this.filesService.getAllFiles();
  }
  @Delete(':id')
  remove1(@Param('id') id: string) {
    console.log('delete-', id);
    return this.filesService.deleteById(id);
  }

  // @Delete()
  // deleteAll() {
  //   console.log('delete all');
  //   return this.filesService.deleteAll();
  // }
}
