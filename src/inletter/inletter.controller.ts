import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InletterService } from './inletter.service';
import { CreateInletterDto } from './dto/create-inletter.dto';
import { UpdateInletterDto } from './dto/update-inletter.dto';

@Controller('inletter')
export class InletterController {
  constructor(private readonly inletterService: InletterService) {}

  @Post()
  create(@Body() createInletterDto: CreateInletterDto) {
    return this.inletterService.create(createInletterDto);
  }

  @Get()
  findAll() {
    return this.inletterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inletterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInletterDto: UpdateInletterDto) {
    return this.inletterService.update(+id, updateInletterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inletterService.remove(+id);
  }
}
