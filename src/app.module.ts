import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config/dist';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PostLetterModule } from './postletter/postLetter.module';
import { DeliryOrganizationModule } from './deliry-organization/deliry-organization.module';
import { OutletterModule } from './outletter/outletter.module';
import { InletterModule } from './inletter/inletter.module';
import { FileloaderModule } from './fileloader/fileloader.module';
import { FilesModule } from './files/files.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [ENV === 'IP' ? '.env' : '.local.env'],
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static/letter'),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_CONNECT'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    PostLetterModule,
    DeliryOrganizationModule,
    OutletterModule,
    InletterModule,
    FilesModule,
    FileloaderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
