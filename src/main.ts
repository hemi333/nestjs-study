import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './tranform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 파이프라인을 이용해서 유효성검증을 class-validation에 위임
  app.useGlobalPipes(new ValidationPipe());
  // 정상적으로 변환된 JSON 데이터들만 나타남
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}
bootstrap();
