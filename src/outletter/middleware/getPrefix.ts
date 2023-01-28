import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import * as dayjs from 'dayjs';

@Injectable()
export class GetPrefix implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const startdate = dayjs().startOf('year').toISOString();
    const enddate = dayjs().endOf('year').toISOString();
    const filter = {
      date: {
        $gte: startdate,
        $lt: enddate,
      },
    };
    // const letters = await this.outLetter.find({ filter }).count({});
    // return letters;
    next();
  }
}
