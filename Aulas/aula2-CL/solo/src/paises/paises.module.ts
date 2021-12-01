import { Module } from '@nestjs/common';
import { PaisesService } from './paises.service';
import { PaisesController } from './paises.controller';

@Module({
  controllers: [PaisesController],
  providers: [PaisesService]
})
export class PaisesModule {}
