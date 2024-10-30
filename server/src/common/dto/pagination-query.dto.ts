import { IsOptional, IsString } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsString()
  readonly take?: string;

  @IsOptional()
  @IsString()
  readonly skip?: string;
}
