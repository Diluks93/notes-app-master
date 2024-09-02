import { Controller, Get, Res, Req } from '@nestjs/common';
import { Response, Request } from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import { App, GlobalStyle } from '../../../client/components';

@Controller()
export class ReactController {
  @Get('*')
  getReactApp(@Req() req: Request, @Res() res: Response) {
    const sheet = new ServerStyleSheet();

    try {
      const html = renderToString(
        <StyleSheetManager
          sheet={sheet.instance}
          shouldForwardProp={isPropValid}
        >
          <StaticRouter location={req.url}>
            <GlobalStyle />
            <App />
          </StaticRouter>
        </StyleSheetManager>,
      );

      const styleTags = sheet.getStyleTags();

      res.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>NOTES-APP-MASTER</title>
            <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">
            ${styleTags}
          </head>
          <body>
            <div id="root">${html}</div>
            <script src="/bundle.js"></script>
          </body>
        </html>
      `);
    } finally {
      sheet.seal();
    }
  }
}
