import { Module } from '@nestjs/common';
import { OutletterService } from './outletter.service';
import { OutletterController } from './outletter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OutLetter, OutLetterSchema } from './schema/outletter.schema';

import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [
    FilesModule,
    MongooseModule.forFeature([
      { name: OutLetter.name, schema: OutLetterSchema },
    ]),
  ],
  controllers: [OutletterController],
  providers: [OutletterService],
})
export class OutletterModule {}
