import { IsOptional, IsString } from 'class-validator';

export class GetFilterDto {
  @IsOptional()
  @IsString()
  readonly search?: string;
}
