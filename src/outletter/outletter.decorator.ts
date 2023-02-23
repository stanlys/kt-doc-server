import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CreateOutletterDto } from './dto/create-outletter.dto';

export const AddATags = createParamDecorator(
  (data: CreateOutletterDto, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    console.log(req);
  },
);
