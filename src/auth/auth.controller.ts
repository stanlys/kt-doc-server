import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { AppService } from 'src/app.service';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('/users')
  getUsers() {
    return 'All users here';
  }

  @Post('/singup')
  createUser() {
    return this.authService.createUser();
  }
}
