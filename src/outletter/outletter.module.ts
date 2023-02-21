import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { OutletterService } from './outletter.service';
import { OutletterController } from './outletter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OutLetter, OutLetterSchema } from './schema/outletter.schema';
import {
  FileUploader,
  FileUploaderSchema,
} from 'src/fileloader/schema/fileloader.schema';
import { GetDocuments } from './outletter.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OutLetter.name, schema: OutLetterSchema },
    ]),
    MongooseModule.forFeature([
      { name: FileUploader.name, schema: FileUploaderSchema },
    ]),
  ],
  controllers: [OutletterController],
  providers: [OutletterService],
})
export class OutletterModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GetDocuments).forRoutes('outletter');
  }
}
