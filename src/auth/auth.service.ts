import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatedUserDTO } from './dto/create-user.dto';
import { User, UserDocument } from './Schema/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<UserDocument>,
  ) {}

  async createUser(createdUser: CreatedUserDTO): Promise<User> {
    try {
      const user = this.UserModel.create(createdUser);
      return user;
    } catch (e) {
      return e;
    }
  }
}
