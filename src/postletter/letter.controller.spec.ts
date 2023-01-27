import { Test, TestingModule } from '@nestjs/testing';
import { PostLetterController } from './letter.controller';
import { PostLetterService } from './postLetter.service';

describe('LetterController', () => {
  let controller: PostLetterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostLetterController],
      providers: [PostLetterService],
    }).compile();

    controller = module.get<PostLetterController>(PostLetterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
