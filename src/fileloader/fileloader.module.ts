import { Module } from '@nestjs/common';
import { FileloaderController } from './fileloader.controller';
import { FileLoaderService } from './fileloader.service';

@Module({
  controllers: [FileloaderController],
  providers: [FileLoaderService],
})
export class FileloaderModule {}
