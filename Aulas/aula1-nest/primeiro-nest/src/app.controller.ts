import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('teste')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): string {
    return this.appService.getTest();
  }

  @Get('/find/:id')
  getByFind(@Param() params) {
    return this.appService.getByFind(params.id);
  }

  @Get('/id/:id')
  getById2(@Param('id') id: string) {
    return this.appService.getById(id);
  }

  @Post('/nome/:nome')
  //para forcar o codigo de resposta @HttpCode('codigo')
  postTeste(@Param('nome') nome: string): string {
    return this.appService.postTeste(nome);
  }

  @Post('/nomes')
  postTeste2(@Body() nome: string): string {
    return this.appService.postTeste(nome);
  }

  @Put('/edit/:id')
  putUpdate(@Param('id') id: string, @Body() body): string {
    return this.appService.putUpdate(id, body.nome);
  }

  @Delete('/del/:id')
  delDelete(@Param('id') id: string): string {
    return this.appService.delDelete(id);
  }
}
