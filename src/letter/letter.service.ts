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
    return `This action returns all letter`;
  }

  findOne(id: string) {
    return `This action returns a #${id} letter`;
  }

  update(id: string, updateLetterDto: UpdateLetterDto) {
    return `This action updates a #${id} letter`;
  }

  remove(id: string) {
    return `This action removes a #${id} letter`;
  }
}
