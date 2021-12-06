import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { Filme } from '@Prisma/client';
import { CreateFilmeDto } from './dto/create-filme.dto';

const filmes = [];

@Injectable()
export class FilmeService {
  constructor(private prisma: PrismaService) {}

  async createPrisma(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.create({ data: { ...createFilmeDto } });
  }

  async findAllPrisma(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  async findOnePrisma(id: number): Promise<Filme> {
    return await this.prisma.filme.findUnique({ where: { id } });
  }

  async updatePrisma(id: number, updateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.update({
      data: { ...updateFilmeDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.filme.delete({ where: { id } });
  }
}
