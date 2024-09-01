import { Module } from '@nestjs/common';
import { ReactController } from './controllers';

@Module({
  imports: [],
  controllers: [ReactController],
  providers: [],
})
export class AppModule {}
