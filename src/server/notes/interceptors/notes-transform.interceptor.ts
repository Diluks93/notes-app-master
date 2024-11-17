import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { map } from 'rxjs/operators';

import { NoteResponseDto } from '../dto';

@Injectable()
export class NotesTransformInterceptor<T> implements NestInterceptor<T, T> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) =>
        plainToInstance(NoteResponseDto, data, {
          excludeExtraneousValues: true,
        }),
      ),
    );
  }
}
