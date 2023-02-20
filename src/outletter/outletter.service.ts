import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as dayjs from 'dayjs';
import { Model } from 'mongoose';
import { CreateOutletterDto } from './dto/create-outletter.dto';
import { UpdateOutletterDto } from './dto/update-outletter.dto';
import { OutLetterDocument } from './schema/outletter.schema';
import { OutLetter } from './schema/outletter.schema';
import {
  FileUploader,
  FileUploaderDocument,
} from 'src/fileloader/schema/fileloader.schema';

@Injectable()
export class OutletterService {
  constructor(
    @InjectModel(OutLetter.name)
    private readonly outLetter: Model<OutLetterDocument>,
    @InjectModel(FileUploader.name)
    private readonly fileUploader: Model<FileUploaderDocument>,
  ) {}

  async getDocumentsArray(createOutletterDto: CreateOutletterDto) {
    console.log(createOutletterDto);
    const { files, ...otherProps } = createOutletterDto;
    const documents = files.map(
      async (document) => await this.fileUploader.findById(document._id),
    );
    return Promise.all(documents);
  }

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

  // async create(createOutletterDto: CreateOutletterDto) {
  //   const today = dayjs().toISOString();
  //   const postFix = dayjs().format('YY');
  //   const count = await this.getPreFix();
  //   // const fileName = `${count}-${postFix}`;
  //   // this.fileService.createFile(FileType.OUT, fileName, file);
  //   const createLetter = {
  //     ...createOutletterDto,
  //     outNumber: `${count}/${postFix}`,
  //     date: today,
  //   };

  //   const letter = this.outLetter.create(createLetter);
  //   return letter;
  // }

  async create(createOutletterDto: CreateOutletterDto) {
    const today = dayjs().toISOString();
    const postFix = dayjs().format('YY');
    const count = await this.getPreFix();
    console.log(createOutletterDto);
    const documents = await this.getDocumentsArray(createOutletterDto);
    const { files, ...otherProps } = createOutletterDto;
    // const documents: Array<FileUploaderDocument> = [];
    // files.forEach(async (document) => {
    //   console.log(document._id);
    //   console.log(isValidObjectId(document._id));
    //   const doc = await this.fileUploader.findById(document._id).exec();
    //   console.log(doc);
    //   documents.push(doc);
    // });
    // documents.forEach(d=> d.)

    const createLetter: CreateOutletterDto = {
      ...otherProps,
      files: documents,
      outNumber: `${count}/${postFix}`,
      date: dayjs(today).toDate(),
    };
    console.log(createLetter);
    const letter = this.outLetter.create(createLetter);
    console.log(letter);
    return letter;
    // return 'OK';
  }

  async findAll() {
    const letters = await this.outLetter
      .find({})
      .populate('files')
      .sort({ _id: -1 });
    return letters;
  }

  async findOne(id: string) {
    const letter = await this.outLetter.findById(id);
    return letter;
  }

  async update(id: string, updateOutletterDto: UpdateOutletterDto) {
    const letter = await this.outLetter.findByIdAndUpdate(
      id,
      updateOutletterDto,
    );
    return letter;
  }

  async remove(id: string) {
    const letter = await this.outLetter.findByIdAndDelete(id);
    return letter;
  }
}
