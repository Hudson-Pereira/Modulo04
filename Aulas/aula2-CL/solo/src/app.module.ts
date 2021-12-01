import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { JogosModule } from './jogos/jogos.module';
import { PaisesModule } from './paises/paises.module';

@Module({
  imports: [FilmesModule, JogosModule, PaisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
