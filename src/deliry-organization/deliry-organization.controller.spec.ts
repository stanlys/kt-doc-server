import { Test, TestingModule } from '@nestjs/testing';
import { DeliryOrganizationController } from './deliry-organization.controller';
import { DeliryOrganizationService } from './deliry-organization.service';

describe('DeliryOrganizationController', () => {
  let controller: DeliryOrganizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliryOrganizationController],
      providers: [DeliryOrganizationService],
    }).compile();

    controller = module.get<DeliryOrganizationController>(
      DeliryOrganizationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
