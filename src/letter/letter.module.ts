import { Module } from '@nestjs/common';
import { LetterService } from './letter.service';
import { LetterController } from './letter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Letter, LetterSchema } from './Schema/letter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Letter.name, schema: LetterSchema }]),
  ],
  controllers: [LetterController],
  providers: [LetterService],
})
export class LetterModule {}
