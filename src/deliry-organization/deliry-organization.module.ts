import { Module } from '@nestjs/common';
import { DeliryOrganizationService } from './deliry-organization.service';
import { DeliryOrganizationController } from './deliry-organization.controller';

@Module({
  controllers: [DeliryOrganizationController],
  providers: [DeliryOrganizationService]
})
export class DeliryOrganizationModule {}
