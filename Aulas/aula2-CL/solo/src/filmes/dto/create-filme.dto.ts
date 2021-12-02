import { IsEmpty, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsInt()
  ano: number;

  @IsNotEmpty()
  @IsString()
  ator: string;

  @IsNotEmpty()
  @IsInt()
  duracao: number;
}
