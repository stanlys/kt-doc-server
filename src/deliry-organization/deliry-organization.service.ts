import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDeliryOrganizationDto } from './dto/create-deliry-organization.dto';
import { UpdateDeliryOrganizationDto } from './dto/update-deliry-organization.dto';
import { Delivery, DeliveryDocument } from './schema/deliry.schema';

@Injectable()
export class DeliryOrganizationService {
  constructor(
    @InjectModel(Delivery.name)
    private readonly DeliveryModel: Model<DeliveryDocument>,
  ) {}

  async create(createDeliryOrganizationDto: CreateDeliryOrganizationDto) {
    const postman = await this.DeliveryModel.create(
      createDeliryOrganizationDto,
    );
    return postman;
  }

  async findAll() {
    const postmans = await this.DeliveryModel.find();
    return postmans;
  }

  async findOne(id: string) {
    const postman = await this.DeliveryModel.findById(id);
    return postman;
  }

  update(id: string, updateDeliryOrganizationDto: UpdateDeliryOrganizationDto) {
    return `This action updates a #${id} deliryOrganization`;
  }

  async remove(id: string) {
    const postman = this.DeliveryModel.findByIdAndRemove(id);
    return postman;
  }
}
