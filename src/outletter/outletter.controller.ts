import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { OutletterService } from './outletter.service';
import { CreateOutletterDto } from './dto/create-outletter.dto';
import { UpdateOutletterDto } from './dto/update-outletter.dto';
import { ApiTags } from '@nestjs/swagger';
import { FilesService } from 'src/files/files.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Работа с исходящими письмами')
@Controller('outletter')
export class OutletterController {
  constructor(
    private readonly outletterService: OutletterService,
    private readonly fileUpload: FilesService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() createOutletterDto: CreateOutletterDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.outletterService.create(createOutletterDto, file);
  }

  @Post('1')
  @UseInterceptors(FileInterceptor('file'))
  uploadfile(@Body() body, @UploadedFile() file) {
    console.log(body.sender);
    return { filename: file.originalname, body: body.sender };
  }

  @Get()
  findAll() {
    return this.outletterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.outletterService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOutletterDto: UpdateOutletterDto,
  ) {
    return this.outletterService.update(id, updateOutletterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.outletterService.remove(id);
  }
}
