import { Test, TestingModule } from '@nestjs/testing';
import { PostLetterService } from './postLetter.service';

describe('LetterService', () => {
  let service: PostLetterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostLetterService],
    }).compile();

    service = module.get<PostLetterService>(PostLetterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
