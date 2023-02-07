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
import { GarminConnect } from 'garmin-connect';

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
    console.log('---->');
    return this.outletterService.create(createOutletterDto, file);
  }

  // @Post()
  // create(@Body() createOutletterDto: CreateOutletterDto) {
  //   console.log('----', createOutletterDto);
  //   return this.outletterService.create(createOutletterDto);
  // }

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

  @Get('/garmin')
  getGarmin() {
    const garmin = async () => {
      const garmin = new GarminConnect({
        username: 'marinehaustova@yandex.ru',
        password: 'Kobila85',
      });
      await garmin.login('marinehaustova@yandex.ru', 'Kobila85');
      const activites = await garmin.getActivities(0, 10);

      return activites;
    };

    return garmin();
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
