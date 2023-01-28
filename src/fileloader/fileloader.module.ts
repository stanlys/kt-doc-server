import { Module } from '@nestjs/common';
import { FileloaderController } from './fileloader.controller';
import { FileloaderService } from './fileloader.service';

@Module({
  controllers: [FileloaderController],
  providers: [FileloaderService],
})
export class FileloaderModule {}
