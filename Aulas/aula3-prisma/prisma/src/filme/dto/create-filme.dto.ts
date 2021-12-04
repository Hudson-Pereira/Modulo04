import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  ano: number;

  @IsNotEmpty()
  @IsString()
  capa: string;
}
