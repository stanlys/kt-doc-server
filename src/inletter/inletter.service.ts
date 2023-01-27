import { Injectable } from '@nestjs/common';
import { CreateInletterDto } from './dto/create-inletter.dto';
import { UpdateInletterDto } from './dto/update-inletter.dto';

@Injectable()
export class InletterService {
  async create(createInletterDto: CreateInletterDto) {
    return 'This action adds a new inletter';
  }

  async findAll() {
    return `This action returns all inletter`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} inletter`;
  }

  async update(id: number, updateInletterDto: UpdateInletterDto) {
    return `This action updates a #${id} inletter`;
  }

  async remove(id: number) {
    return `This action removes a #${id} inletter`;
  }
}
