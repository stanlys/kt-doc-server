import { Test, TestingModule } from '@nestjs/testing';
import { OutletterService } from './outletter.service';

describe('OutletterService', () => {
  let service: OutletterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutletterService],
    }).compile();

    service = module.get<OutletterService>(OutletterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
