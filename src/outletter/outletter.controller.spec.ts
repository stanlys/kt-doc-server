import { Test, TestingModule } from '@nestjs/testing';
import { OutletterController } from './outletter.controller';
import { OutletterService } from './outletter.service';
import { FilesService } from 'src/files/files.service';

describe('OutletterControllerMake', () => {
  let controller: OutletterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OutletterController],
      providers: [OutletterService],
    }).compile();
    controller = module.get<OutletterController>(OutletterController);
  });
});
// it('should be defined', () => {
//   expect(controller).toBeDefined();
// });
