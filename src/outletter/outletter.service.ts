import { Injectable } from '@nestjs/common';
import { CreateOutletterDto } from './dto/create-outletter.dto';
import { UpdateOutletterDto } from './dto/update-outletter.dto';

@Injectable()
export class OutletterService {
  create(createOutletterDto: CreateOutletterDto) {
    return 'This action adds a new outletter';
  }

  findAll() {
    return `This action returns all outletter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} outletter`;
  }

  update(id: number, updateOutletterDto: UpdateOutletterDto) {
    return `This action updates a #${id} outletter`;
  }

  remove(id: number) {
    return `This action removes a #${id} outletter`;
  }
}
