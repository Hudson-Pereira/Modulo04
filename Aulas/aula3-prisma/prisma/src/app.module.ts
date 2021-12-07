import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmeModule } from './filme/filme.module';
import { GeneroModule } from './genero/genero.module';
import { ParticipanteModule } from './participante/participante.module';

@Module({
  imports: [FilmeModule, GeneroModule, ParticipanteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
