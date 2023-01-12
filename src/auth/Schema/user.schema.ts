import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@ApiTags('Модель')
@Schema()
export class User {
  @Prop()
  username: string;

  @ApiProperty({ description: 'Password' })
  @Prop()
  password: string;

  @Prop()
  login: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
