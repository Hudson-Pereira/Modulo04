import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  ano: number;

  @IsNotEmpty()
  @IsString()
  capa: string;

  @IsNotEmpty()
  @IsString()
  genero: string;

  @IsNotEmpty()
  @IsInt()
  generoid: number;
}
