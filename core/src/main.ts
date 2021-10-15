import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {ValidationPipe, VersioningType} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1'
  });

  app.useGlobalPipes(new ValidationPipe());

  console.log('port: ', process.env.PORT)

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
