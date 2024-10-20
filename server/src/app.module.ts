import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { NotesModule } from './notes/notes.module';
import { CommonModule } from './common/common.module';
import { AssrModule } from './assr/assr.module';

import { validate } from '../../shared';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      validate,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres' as const,
        autoLoadEntities: true,
        synchronize: true,
        host: configService.get('DB_HOST'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE') as string,
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
      }),
    }),
    NotesModule,
    CommonModule,
    AssrModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
