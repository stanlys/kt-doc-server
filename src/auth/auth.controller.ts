import { Controller, Get, HttpStatus } from '@nestjs/common';
import { Body, Post, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreatedUserDTO } from './dto/create-user.dto';
import { User } from './Schema/user.schema';

@ApiTags('Авторизация')
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: ' Get all users' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All users here',
    type: Array<User>,
  })
  @Get('/users')
  @UseGuards(AuthGuard('api-key'))
  getUsers() {
    return 'All users here';
  }

  @Post('/signup')
  createUser(@Body() user: CreatedUserDTO) {
    return this.authService.createUser(user);
  }
}
