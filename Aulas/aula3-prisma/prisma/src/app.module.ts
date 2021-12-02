import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmeModule } from './filme/filme.module';

@Module({
  imports: [FilmeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
