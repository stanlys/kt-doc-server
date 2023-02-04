import { Module } from '@nestjs/common';
import { PostLetterService } from './postLetter.service';
import { PostLetterController } from './postletter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostLetter, LetterSchema } from './Schema/postletter.schema';
import {
  Delivery,
  DeliverySchema,
} from 'src/deliry-organization/schema/deliry.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PostLetter.name, schema: LetterSchema },
      { name: Delivery.name, schema: DeliverySchema },
    ]),
  ],
  controllers: [PostLetterController],
  providers: [PostLetterService],
})
export class PostLetterModule {}
