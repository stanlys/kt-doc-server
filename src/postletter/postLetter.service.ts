import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostLetterDto } from './dto/create-letter.dto';
import { UpdatePostLetterDto } from './dto/update-letter.dto';
import { PostLetter, PostLetterDocument } from './Schema/letter.schema';

@Injectable()
export class PostLetterService {
  constructor(
    @InjectModel(PostLetter.name)
    private readonly LetterModel: Model<PostLetterDocument>,
  ) {}

  create(createLetterDto: CreatePostLetterDto) {
    const postLetter = this.LetterModel.create(createLetterDto);
    return postLetter;
  }

  findAll() {
    const postLetters = this.LetterModel.find().sort({ _id: -1 });
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
