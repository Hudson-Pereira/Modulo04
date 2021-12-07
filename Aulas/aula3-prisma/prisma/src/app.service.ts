import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem vindo a API. As rotas são /filme, /genero e /participante.';
  }
}
