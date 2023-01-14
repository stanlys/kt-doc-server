import { PartialType } from '@nestjs/swagger';
import { CreateDeliryOrganizationDto } from './create-deliry-organization.dto';

export class UpdateDeliryOrganizationDto extends PartialType(CreateDeliryOrganizationDto) {}
