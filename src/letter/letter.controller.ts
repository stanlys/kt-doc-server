import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { LetterService } from './letter.service';
import { CreateLetterDto } from './dto/create-letter.dto';
import { UpdateLetterDto } from './dto/update-letter.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Работа с почтовыми отправлениями')
@Controller('letter')
export class LetterController {
  constructor(private readonly letterService: LetterService) {}

  @ApiOperation({ summary: ' Создание записи о почтовом отправлении' })
  @Post()
  create(@Body() createLetterDto: CreateLetterDto) {
    return this.letterService.create(createLetterDto);
  }

  @ApiOperation({ summary: ' Получить все почтовые отправление' })
  @Get()
  findAll() {
    return this.letterService.findAll();
  }

  @ApiOperation({ summary: 'Поиск почтовых отправлени' })
  @Get('search')
  search(@Query() q: string) {
    const myQuery = JSON.stringify(q);
    return `search ${myQuery}`;
  }

  @ApiOperation({ summary: ' Получить потвое отправление по id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.letterService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновить почтовое отпавление по id' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLetterDto: UpdateLetterDto) {
    return this.letterService.update(+id, updateLetterDto);
  }

  @ApiOperation({ summary: ' Удалить почтовое отправление ' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.letterService.remove(+id);
  }
}
