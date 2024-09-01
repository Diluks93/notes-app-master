import { Route, Routes } from 'react-router-dom';

import { Welcome, Notes } from '../../pages';
import { ROUTES } from '../../constants/routes';

export function App() {
  return (
    <Routes>
      <Route path={ROUTES.WELCOME} element={<Welcome />} />
      <Route path={ROUTES.NOTES} element={<Notes />} />
    </Routes>
  );
}

export default App;
