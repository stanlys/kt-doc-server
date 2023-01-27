import { Module } from '@nestjs/common';
import { OutletterService } from './outletter.service';
import { OutletterController } from './outletter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OutLetter, OutLetterSchema } from './schema/outletter.schema';
import moment from 'moment';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OutLetter.name, schema: OutLetterSchema },
    ]),
  ],
  controllers: [OutletterController],
  providers: [OutletterService, { provide: 'MomentWrapper', useValue: moment }],
})
export class OutletterModule {}
