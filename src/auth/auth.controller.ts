import {
  Controller,
  Get,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { Body, Post, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadGatewayResponse,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreatedUserDTO } from './dto/create-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
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

  @ApiOperation({ summary: ' Register and get JWT' })
  @UseGuards(LocalAuthGuard)
  @Post('/signup')
  createUser(@Body() user: CreatedUserDTO) {
    return this.authService.createUser(user);
  }

  @ApiOperation({ summary: ' Test JWT' })
  @ApiBearerAuth('JWT')
  @ApiUnauthorizedResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'User not found',
  })
  @UseGuards(JwtAuthGuard)
  @Post('/signin')
  login(@Body() user: CreatedUserDTO) {
    return this.authService.login(user);
  }
}
