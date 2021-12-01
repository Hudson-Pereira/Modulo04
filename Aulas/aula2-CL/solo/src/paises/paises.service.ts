import { Injectable } from '@nestjs/common';
import { CreatePaiseDto } from './dto/create-paise.dto';
import { UpdatePaiseDto } from './dto/update-paise.dto';

const paises = [];

@Injectable()
export class PaisesService {
  create(createPaiseDto: CreatePaiseDto) {
    paises.push(createPaiseDto);
    return `Pais ${createPaiseDto.nome} adicionado.`;
  }

  findAll() {
    return paises;
  }

  findOne(id: number) {
    return paises[id];
  }

  update(id: number, updatePaiseDto: UpdatePaiseDto) {
    paises[id] = updatePaiseDto;
    return `País ${updatePaiseDto.nome} alterado.`;
  }

  remove(id: number) {
    delete paises[id];
    return `País removido.`;
  }
}
