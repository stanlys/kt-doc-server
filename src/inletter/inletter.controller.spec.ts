import { Test, TestingModule } from '@nestjs/testing';
import { InletterController } from './inletter.controller';
import { InletterService } from './inletter.service';

describe('InletterController', () => {
  let controller: InletterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InletterController],
      providers: [InletterService],
    }).compile();

    controller = module.get<InletterController>(InletterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
