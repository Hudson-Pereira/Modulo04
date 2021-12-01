import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

const filmes = [];

@Injectable()
export class FilmesService {
  create(createFilmeDto: CreateFilmeDto) {
    filmes.push(createFilmeDto);
    return `Filme ${createFilmeDto.nome} cadastrado com sucesso.`;
  }

  findAll() {
    return filmes;
  }

  findOne(id: number) {
    return filmes[id];
  }

  update(id: number, updateFilmeDto: UpdateFilmeDto) {
    filmes[id] = updateFilmeDto;
    return `Filme ${updateFilmeDto.nome} alterado.`;
  }

  remove(id: number) {
    delete filmes[id];
    return `Filme removido.`;
  }
}
