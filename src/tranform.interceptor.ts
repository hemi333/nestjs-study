import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs';
import { instanceToPlain } from 'class-transformer';

@Injectable()
// 클래스의 인스턴스를 일반 객체로 변환
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    return next.handle().pipe(map((data) => instanceToPlain(data)));
  }
}
