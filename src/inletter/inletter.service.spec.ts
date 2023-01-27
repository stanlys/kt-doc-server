import { Test, TestingModule } from '@nestjs/testing';
import { InletterService } from './inletter.service';

describe('InletterService', () => {
  let service: InletterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InletterService],
    }).compile();

    service = module.get<InletterService>(InletterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
