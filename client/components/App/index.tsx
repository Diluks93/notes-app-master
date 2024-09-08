import { Route, Routes } from 'react-router-dom';

import { Welcome, NotesPage as Notes } from '../../pages';
import { ROUTES } from '../../constants/routes';

export function App() {
  return (
    <Routes>
      <Route path={ROUTES.NOTES} element={<Notes />} />
      <Route path={ROUTES.WELCOME} element={<Welcome />} />
    </Routes>
  );
}

export default App;
