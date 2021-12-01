import { Injectable } from '@nestjs/common';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';

const jogos = [];

@Injectable()
export class JogosService {
  create(createJogoDto: CreateJogoDto) {
    jogos.push(createJogoDto);
    return `Jogo ${createJogoDto.nome} adicionado com sucesso.`;
  }

  findAll() {
    return jogos;
  }

  findOne(id: number) {
    return jogos[id];
  }

  update(id: number, updateJogoDto: UpdateJogoDto) {
    jogos[id] = updateJogoDto;
    return `Jogo ${updateJogoDto.nome} alterado`;
  }

  remove(id: number) {
    delete jogos[id];
    return `Jogo removido`;
  }
}
