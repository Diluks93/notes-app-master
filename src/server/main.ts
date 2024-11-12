import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { setupNext } from './next-server';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const PORT = process.env.PORT;
  await setupNext(app);

  app.useGlobalPipes(new ValidationPipe({}));
  app.enableCors();

  await app.listen(PORT || 3000);

  logger.log(`Application listening on port ${PORT}`);
}

bootstrap();
