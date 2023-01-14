import { Injectable } from '@nestjs/common';
import { CreateDeliryOrganizationDto } from './dto/create-deliry-organization.dto';
import { UpdateDeliryOrganizationDto } from './dto/update-deliry-organization.dto';

@Injectable()
export class DeliryOrganizationService {
  create(createDeliryOrganizationDto: CreateDeliryOrganizationDto) {
    return 'This action adds a new deliryOrganization';
  }

  findAll() {
    return `This action returns all deliryOrganization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliryOrganization`;
  }

  update(id: number, updateDeliryOrganizationDto: UpdateDeliryOrganizationDto) {
    return `This action updates a #${id} deliryOrganization`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliryOrganization`;
  }
}
