import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config/dist';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const configSwagger = new DocumentBuilder()
    .setTitle('OOO NPP KT Document Server')
    .setDescription('Input & Output letter')
    .setVersion('0.0.1')
    .addTag('Документация')
    .addBearerAuth(
      {
        type: 'apiKey',
        name: 'Bearer',
        in: 'header',
        description: 'Enter Bearer JWT',
      },
      'Bearer token',
    )
    .setContact('stan', '1', 'stanlys@yandex.ru')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('doc', app, document);

  app.use(helmet());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const port = configService.get('PORT');
  console.log(`SERVER RUN PORT:${port}`);
  await app.listen(port);
}
bootstrap();
