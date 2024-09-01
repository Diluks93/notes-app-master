import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import webpack from 'webpack';
import webpackConfig from '../../webpack/client.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const expressApp = app.getHttpAdapter().getInstance();

  if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig);

    expressApp.use(
      webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output?.publicPath as string,
      }),
    );

    expressApp.use(webpackHotMiddleware(compiler));
  }

  expressApp.use(express.static(join(__dirname, '..', 'public')));

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
