import { IsString, MinLength } from 'class-validator';

export class CreatedUserDTO {
  @IsString()
  @MinLength(4, { message: 'Username: Минимум 4 символа' })
  readonly username: string;

  @IsString()
  @MinLength(6, { message: 'Password: Минимум 6 символа' })
  readonly password: string;

  @IsString()
  @MinLength(4, { message: 'Login: Минимум 4 символа' })
  readonly login: string;
}
