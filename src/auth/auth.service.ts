import { Injectable } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import jwt from 'jsonwebtoken';
import { CreatedUserDTO } from './dto/create-user.dto';
import { User, UserDocument } from './Schema/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private readonly UserModel: Model<UserDocument>,
  ) {}

  async createUser(createdUser: CreatedUserDTO): Promise<any> {
    try {
      const user = this.UserModel.create(createdUser);
      const payload = {
        username: createdUser.username,
        login: createdUser.login,
      };
      return {
        token: this.jwtService.sign(payload),
        user,
      };
    } catch (e) {
      return e;
    }
  }

  async login(createdUser: CreatedUserDTO) {
    const payload = {
      username: createdUser.username,
      login: createdUser.login,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
