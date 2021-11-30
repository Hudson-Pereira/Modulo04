import { Injectable } from '@nestjs/common';

const lista = [];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): string {
    return 'Nosso teste.';
  }

  getById(id) {
    return `o ID passado foi: ${id}`;
  }

  getByFind(id) {
    return lista[id];
  }

  postTeste(nome) {
    lista.push(nome);
    return 'Cadastrado com sucesso';
  }

  putUpdate(id, nome) {
    lista[id] = nome;
    return 'Atualizado com Sucesso';
  }

  delDelete(id) {
    delete lista[id];
    return 'Deletado.';
  }
}
