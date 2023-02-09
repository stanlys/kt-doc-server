import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileloaderController } from './fileloader.controller';
import { FileLoaderService } from './fileloader.service';
import { FileLoader, FileLoaderSchema } from './schema/fileloader.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FileLoader.name, schema: FileLoaderSchema },
    ]),
  ],
  controllers: [FileloaderController],
  providers: [FileLoaderService],
})
export class FileloaderModule {}
