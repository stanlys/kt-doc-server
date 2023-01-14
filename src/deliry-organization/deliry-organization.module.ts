import { Module } from '@nestjs/common';
import { DeliryOrganizationService } from './deliry-organization.service';
import { DeliryOrganizationController } from './deliry-organization.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Delivery, DeliverySchema } from './schema/deliry.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Delivery.name, schema: DeliverySchema },
    ]),
  ],
  controllers: [DeliryOrganizationController],
  providers: [DeliryOrganizationService],
})
export class DeliryOrganizationModule {}
