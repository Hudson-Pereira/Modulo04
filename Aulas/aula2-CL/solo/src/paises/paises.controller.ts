import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaisesService } from './paises.service';
import { CreatePaiseDto } from './dto/create-paise.dto';
import { UpdatePaiseDto } from './dto/update-paise.dto';

@Controller('paises')
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}

  @Post()
  create(@Body() createPaiseDto: CreatePaiseDto) {
    return this.paisesService.create(createPaiseDto);
  }

  @Get()
  findAll() {
    return this.paisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paisesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaiseDto: UpdatePaiseDto) {
    return this.paisesService.update(+id, updatePaiseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paisesService.remove(+id);
  }
}
