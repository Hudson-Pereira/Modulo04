import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

const filmes = [];

@Injectable()
export class FilmeService {
  create(createFilmeDto: CreateFilmeDto) {
    filmes.push(createFilmeDto);
    return 'Filme criado';
  }

  //  async create(createFilmeDto: CreateFilmeDto): Promise<Filme> {
  //    return this.prisma.filme.create({ data: { ...createFilmeDto } });
  //  }

  findAll() {
    return filmes;
  }

  findOne(id: number) {
    return filmes[id];
  }

  update(id: number, updateFilmeDto: UpdateFilmeDto) {
    filmes[id] = updateFilmeDto;
    return `Filme alterado`;
  }

  remove(id: number) {
    delete filmes[id];
    return `Deletado`;
  }
}
