import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { CreatedUserDTO } from './dto/create-user.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('/users')
  getUsers() {
    return 'All users here';
  }

  @Post('/signup')
  createUser(@Body() user: CreatedUserDTO) {
    return this.authService.createUser(user);
  }
}
