import { PartialType } from '@nestjs/mapped-types';
import { CreatePaiseDto } from './create-paise.dto';

export class UpdatePaiseDto extends PartialType(CreatePaiseDto) {}
