import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeliryOrganizationService } from './deliry-organization.service';
import { CreateDeliryOrganizationDto } from './dto/create-deliry-organization.dto';
import { UpdateDeliryOrganizationDto } from './dto/update-deliry-organization.dto';

@ApiTags('Почтовые организации')
@Controller('delivery')
export class DeliryOrganizationController {
  constructor(
    private readonly deliryOrganizationService: DeliryOrganizationService,
  ) {}

  @Post()
  create(@Body() createDeliryOrganizationDto: CreateDeliryOrganizationDto) {
    return this.deliryOrganizationService.create(createDeliryOrganizationDto);
  }

  @Get()
  findAll() {
    return this.deliryOrganizationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliryOrganizationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeliryOrganizationDto: UpdateDeliryOrganizationDto,
  ) {
    return this.deliryOrganizationService.update(
      +id,
      updateDeliryOrganizationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliryOrganizationService.remove(id);
  }
}
