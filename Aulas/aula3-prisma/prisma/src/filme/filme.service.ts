import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { Filme, Prisma } from '@Prisma/client';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmeService {
  constructor(private prisma: PrismaService) {}

  async createPrisma(data: Prisma.FilmeUncheckedCreateInput): Promise<Filme> {
    return await this.prisma.filme.create({ data });
  }

  // async createPrisma(createFilmeDto: CreateFilmeDto): Promise<Filme> {
  //   return await this.prisma.filme.create({ data: { ...createFilmeDto } });
  // }

  async findAllPrisma(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  async findOnePrisma(id: number): Promise<Filme> {
    return await this.prisma.filme.findUnique({ where: { id } });
  }

  async updatePrisma(id: number, data: UpdateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.update({
      data,
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.filme.delete({ where: { id } });
  }
}
