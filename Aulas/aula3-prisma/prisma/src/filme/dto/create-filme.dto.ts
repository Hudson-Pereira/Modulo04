import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  ano: number;

  @IsNotEmpty()
  @IsString()
  capa: string;

  @IsNotEmpty()
  @IsInt()
  generoid: number;
}
