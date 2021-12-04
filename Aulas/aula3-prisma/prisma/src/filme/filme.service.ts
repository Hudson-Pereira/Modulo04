import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { Filme } from '@Prisma/client';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

const filmes = [];

@Injectable()
export class FilmeService {
  constructor(private prisma: PrismaService) {}

  create(createFilmeDto: CreateFilmeDto) {
    filmes.push(createFilmeDto);
    return 'Filme criado';
  }

  async createPrisma(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.create({ data: { ...createFilmeDto } });
  }

  findAll() {
    return filmes;
  }

  async findAllPrisma(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  findOne(id: number) {
    return filmes[id];
  }

  async findOnePrisma(id: number): Promise<Filme> {
    return await this.prisma.filme.findUnique({ where: { id } });
  }

  update(id: number, updateFilmeDto: UpdateFilmeDto) {
    filmes[id] = updateFilmeDto;
    return `Filme alterado`;
  }

  async updatePrisma(id: number, updateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.update({
      data: { ...updateFilmeDto },
      where: { id },
    });
  }

  remove(id: number) {
    delete filmes[id];
    return `Deletado`;
  }

  async removePrisma(id: number) {
    return await this.prisma.filme.delete({ where: { id } });
  }
}
