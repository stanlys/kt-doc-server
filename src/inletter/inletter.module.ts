import { Module } from '@nestjs/common';
import { InletterService } from './inletter.service';
import { InletterController } from './inletter.controller';

@Module({
  controllers: [InletterController],
  providers: [InletterService]
})
export class InletterModule {}
