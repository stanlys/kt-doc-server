import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileloaderController } from './fileloader.controller';
import { FileLoaderService } from './fileloader.service';
import { FileUploader, FileUploaderSchema } from './schema/fileloader.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FileUploader.name, schema: FileUploaderSchema },
    ]),
  ],
  controllers: [FileloaderController],
  providers: [FileLoaderService],
})
export class FileloaderModule {}
