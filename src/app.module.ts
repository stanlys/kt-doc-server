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
import { RoleModule } from './role/role.module';
import { AdminModule } from '@adminjs/nestjs';
import * as AdminJSMongoose from '@adminjs/mongoose';
import AdminJS from 'adminjs';
import { Category } from './category.entity';
import { PostLetter } from './postletter/Schema/postletter.schema';

const ENV = process.env.NODE_ENV;

const DEFAULT_ADMIN = {
  email: 'admin@yandex.ru',
  password: '123456789',
};

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

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
    RoleModule,
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [Category],
        },
        auth: {
          authenticate,
          cookieName: 'adminjs',
          cookiePassword: 'secret',
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: 'secret',
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [Category],
        },
        auth: {
          authenticate,
          cookieName: 'adminJS',
          cookiePassword: 'secret',
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: 'secret',
        },
      }),
    }),
*/
