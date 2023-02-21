import { Injectable, NestMiddleware } from '@nestjs/common';
import dayjs from 'dayjs';
import { NextFunction } from 'express';

@Injectable()
export class GetDocuments implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('REQ - ', req.formData);
    return { ...req.body, date: '98' };
    next();
  }
}
