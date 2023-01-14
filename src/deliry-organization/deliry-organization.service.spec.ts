import { Test, TestingModule } from '@nestjs/testing';
import { DeliryOrganizationService } from './deliry-organization.service';

describe('DeliryOrganizationService', () => {
  let service: DeliryOrganizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliryOrganizationService],
    }).compile();

    service = module.get<DeliryOrganizationService>(DeliryOrganizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
