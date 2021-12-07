import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { Participante } from '@Prisma/client';
import { CreateParticipanteDto } from './dto/create-participante.dto';

@Injectable()
export class ParticipanteService {
  constructor(private prisma: PrismaService) {}
  async create(
    createParticipanteDto: CreateParticipanteDto,
  ): Promise<Participante> {
    return await this.prisma.participante.create({
      data: { ...createParticipanteDto },
    });
  }

  async findAll(): Promise<Participante[]> {
    return await this.prisma.participante.findMany();
  }

  async findOne(id: number): Promise<Participante> {
    return await this.prisma.participante.findUnique({ where: { id } });
  }

  async update(id: number, updateParticipanteDto): Promise<Participante> {
    return await this.prisma.participante.update({
      data: { ...updateParticipanteDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.participante.delete({ where: { id } });
  }
}
