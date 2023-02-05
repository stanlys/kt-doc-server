import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Delivery,
  DeliveryDocument,
} from 'src/deliry-organization/schema/deliry.schema';
import { CreatePostLetterDto } from './dto/create-letter.dto';
import { UpdatePostLetterDto } from './dto/update-letter.dto';
import { PostLetter, PostLetterDocument } from './Schema/postletter.schema';

@Injectable()
export class PostLetterService {
  constructor(
    @InjectModel(PostLetter.name)
    private readonly LetterModel: Model<PostLetterDocument>,
    @InjectModel(Delivery.name)
    private readonly DeliveryModel: Model<DeliveryDocument>,
  ) {}

  async create(createLetterDto: CreatePostLetterDto) {
    const { postman, ...otherProps } = createLetterDto;
    const organization = await this.DeliveryModel.findById(postman);
    const letter = {
      ...otherProps,
      postman: organization,
    };
    const postLetter = await this.LetterModel.create(letter);
    return postLetter;
  }

  async save() {
    const postLetter = await this.LetterModel.find({});
    return postLetter;
  }

  async findAll() {
    const postLetters = await this.LetterModel.find()
      .populate('postman')
      .sort({ _id: -1 });
    console.log(postLetters);
    return postLetters;
  }

  findOne(id: string) {
    const postLetter = this.LetterModel.findById(id);
    return postLetter;
  }

  update(id: string, updateLetterDto: UpdatePostLetterDto) {
    const postLetter = this.LetterModel.findByIdAndUpdate(id, updateLetterDto);
    return postLetter;
  }

  remove(id: string) {
    const postLetter = this.LetterModel.findByIdAndDelete(id);
    return postLetter;
  }
}
