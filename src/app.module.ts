import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
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

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static/letter'),
    }),
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2',
    ),
    AuthModule,
    PostLetterModule,
    DeliryOrganizationModule,
    OutletterModule,
    InletterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//OUT mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2

//KT  mongodb+srv://user:useruser@cluster0.zmdfs1v.mongodb.net/?retryWrites=true&w=majority'
