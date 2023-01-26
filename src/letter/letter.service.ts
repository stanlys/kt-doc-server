import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLetterDto } from './dto/create-letter.dto';
import { UpdateLetterDto } from './dto/update-letter.dto';
import { Letter, LetterDocument } from './Schema/letter.schema';

@Injectable()
export class LetterService {
  constructor(
    @InjectModel(Letter.name)
    private readonly LetterModel: Model<LetterDocument>,
  ) {}

  create(createLetterDto: CreateLetterDto) {
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

  update(id: string, updateLetterDto: UpdateLetterDto) {
    const postLetter = this.LetterModel.findByIdAndUpdate(id, updateLetterDto);
    return postLetter;
  }

  remove(id: string) {
    const postLetter = this.LetterModel.findByIdAndDelete(id);
    return postLetter;
  }
}
