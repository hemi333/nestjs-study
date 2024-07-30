import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 파이프라인을 이용해서 유효성검증을 class-validation에 위임
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
