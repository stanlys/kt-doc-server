import { Module } from '@nestjs/common';
import { PostLetterService } from './postLetter.service';
import { PostLetterController } from './postletter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostLetter, LetterSchema } from './Schema/postletter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PostLetter.name, schema: LetterSchema },
    ]),
  ],
  controllers: [PostLetterController],
  providers: [PostLetterService],
})
export class PostLetterModule {}
