import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmeService } from './filme.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Controller('filme')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @Post()
  create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmeService.createPrisma(createFilmeDto);
  }

  @Get()
  findAll() {
    return this.filmeService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmeService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmeService.updatePrisma(+id, updateFilmeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmeService.removePrisma(+id);
  }
}
