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
import { PostLetterService } from './postLetter.service';
import { CreatePostLetterDto } from './dto/create-letter.dto';
import { UpdatePostLetterDto } from './dto/update-letter.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostLetter } from './Schema/postletter.schema';

@ApiTags('Работа с почтовыми отправлениями')
@Controller('letter')
export class PostLetterController {
  constructor(private readonly letterService: PostLetterService) {}

  @ApiOperation({ summary: ' Создание записи о почтовом отправлении' })
  @ApiResponse({ status: 200, type: PostLetter })
  @Post()
  create(@Body() createLetterDto: CreatePostLetterDto) {
    //console.log('-> POST <-');
    //return 'POST' + JSON.stringify(createLetterDto);
    return this.letterService.create(createLetterDto);
  }

  @ApiOperation({ summary: ' Получить все почтовые отправление' })
  @ApiResponse({
    status: 200,
    type: [PostLetter],
  })
  @Get()
  findAll() {
    return this.letterService.findAll();
  }

  @ApiOperation({ summary: 'Поиск почтовых отправлений' })
  @Get('search')
  search(@Query() q: string) {
    const myQuery = JSON.stringify(q);
    return `search ${myQuery}`;
  }

  @ApiOperation({ summary: ' Получить почтовое отправление по id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.letterService.findOne(id);
  }

  @ApiOperation({ summary: 'Обновить почтовое отпавление по id' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLetterDto: UpdatePostLetterDto,
  ) {
    return this.letterService.update(id, updateLetterDto);
  }

  @ApiOperation({ summary: ' Удалить почтовое отправление ' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.letterService.remove(id);
  }
}
