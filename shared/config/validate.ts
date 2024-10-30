import { plainToInstance } from 'class-transformer';
import { IsNumber, IsString, Max, Min, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsNumber()
  @Min(0)
  @Max(65535)
  readonly PORT: number;

  @IsString()
  readonly DB_HOST: string;

  @IsNumber()
  @Min(0)
  @Max(65535)
  readonly DB_PORT: number;

  @IsString()
  readonly DB_PASSWORD: string;

  @IsString()
  readonly DB_USERNAME: string;

  @IsString()
  readonly DB_DATABASE: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
