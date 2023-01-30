import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ExpressLoader } from '@nestjs/serve-static';
import * as dayjs from 'dayjs';
import { Model } from 'mongoose';
import { FilesService } from 'src/files/files.service';
import { CreateOutletterDto } from './dto/create-outletter.dto';
import { UpdateOutletterDto } from './dto/update-outletter.dto';
import { OutLetterDocument } from './schema/outletter.schema';
import { OutLetter } from './schema/outletter.schema';
import { FileType } from 'src/files/files.service';

@Injectable()
export class OutletterService {
  constructor(
    @InjectModel(OutLetter.name)
    private readonly outLetter: Model<OutLetterDocument>,
    private fileService: FilesService,
  ) {}

  async getPreFix() {
    const startdate = dayjs().startOf('year').toISOString();
    const enddate = dayjs().endOf('year').toISOString();
    const filter = {
      date: {
        $gte: startdate,
        $lt: enddate,
      },
    };
    const letters = (await this.outLetter.find({ filter }).count({})) + 1;
    return letters;
  }

  async create(
    createOutletterDto: CreateOutletterDto,
    file: Express.Multer.File,
  ) {
    const today = dayjs().toISOString();
    const postFix = dayjs().format('YY');
    const count = await this.getPreFix();
    const fileName = `${count}-${postFix}`;
    this.fileService.createFile(FileType.OUT, fileName, file);
    const createLetter = {
      ...createOutletterDto,
      outNumber: `${count}/${postFix}`,
      date: today,
    };

    const letter = this.outLetter.create(createLetter);
    return letter;
  }

  async findAll() {
    const letters = await this.outLetter.find().sort({ _id: -1 });
    return letters;
  }

  async findOne(id: number) {
    const letter = await this.outLetter.findById(id);
    return letter;
  }

  async update(id: number, updateOutletterDto: UpdateOutletterDto) {
    const letter = await this.outLetter.findByIdAndUpdate(
      id,
      updateOutletterDto,
    );
    return letter;
  }

  async remove(id: number) {
    const letter = await this.outLetter.findByIdAndDelete(id);
    return letter;
  }
}
