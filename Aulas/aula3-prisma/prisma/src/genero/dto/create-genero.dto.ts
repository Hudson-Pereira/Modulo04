import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGeneroDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;
}
