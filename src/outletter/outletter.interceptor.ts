import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class addTags implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    console.log('Interception');
    const { body, other } = req;
    const newBody = { ...body, dateOrder: 'ddddd' };
    req.body = newBody;

    return next.handle().pipe(newBody);
  }
}
