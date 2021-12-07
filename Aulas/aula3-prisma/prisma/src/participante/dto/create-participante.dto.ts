import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateParticipanteDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  genero: string;

  @IsNotEmpty()
  @IsInt()
  ano: number;

  @IsNotEmpty()
  @IsInt()
  filmeid: number;
}
