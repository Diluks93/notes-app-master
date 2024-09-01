import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components';

const domNode = document.getElementById('root') as HTMLElement;

if (module.hot) {
  module.hot.accept();
}

hydrateRoot(
  domNode,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
