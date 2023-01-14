import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { LetterModule } from './letter/letter.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static/letter'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://user:useruser@cluster0.zmdfs1v.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthModule,
    LetterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
