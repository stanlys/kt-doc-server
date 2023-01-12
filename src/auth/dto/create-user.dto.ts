import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

@ApiTags('Model')
export class CreatedUserDTO {
  @ApiProperty({ description: 'UserName', minLength: 4, example: 'user' })
  @IsString()
  @MinLength(4, { message: 'Username: Минимум 4 символа' })
  readonly username: string;

  @ApiProperty({ description: 'Password' })
  @IsString()
  @MinLength(6, { message: 'Password: Минимум 6 символа' })
  readonly password: string;

  @ApiProperty({ description: 'Login' })
  @IsString()
  @MinLength(4, { message: 'Login: Минимум 4 символа' })
  readonly login: string;
}
