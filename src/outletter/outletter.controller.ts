import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OutletterService } from './outletter.service';
import { CreateOutletterDto } from './dto/create-outletter.dto';
import { UpdateOutletterDto } from './dto/update-outletter.dto';
import { ApiTags } from '@nestjs/swagger';
import { FilesService } from 'src/files/files.service';

@ApiTags('Работа с исходящими письмами')
@Controller('outletter')
export class OutletterController {
  constructor(
    private readonly outletterService: OutletterService,
    private readonly fileUpload: FilesService,
  ) {}

  @Post()
  create(@Body() createOutletterDto: CreateOutletterDto) {
    return this.outletterService.create(createOutletterDto);
  }

  @Get()
  findAll() {
    return this.outletterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.outletterService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOutletterDto: UpdateOutletterDto,
  ) {
    return this.outletterService.update(+id, updateOutletterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.outletterService.remove(+id);
  }
}
