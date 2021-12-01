import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Rotas funcionando, use /filmes, /jogos ou /paises.';
  }
}
