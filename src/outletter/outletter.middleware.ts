import { Injectable, NestMiddleware } from '@nestjs/common';
import dayjs from 'dayjs';
import { NextFunction } from 'express';

@Injectable()
export class GetDocuments implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('REQ - ', req.body);
    if (req.method === 'post')
      return {
        ...req.body,
        date: dayjs(),
        ResponseToIncoming: 'записал через middleware',
      };
    else next();
  }
}
