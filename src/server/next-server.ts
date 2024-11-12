import { INestApplication } from '@nestjs/common';
import { Request, Response } from 'express';

export async function setupNext(app: INestApplication) {
  const dev = process.env.NODE_ENV !== 'production';

  const next = (await import('next')).default;
  const nextApp = next({ dev });
  const handle = nextApp.getRequestHandler();

  await nextApp.prepare();

  app.use((req: Request, res: Response, nextFn) => {
    if (req.path.startsWith('/api')) {
      return nextFn();
    }

    handle(req, res);
  });
}
