import { Header, Notes, SearchBar } from '../../components';
import { NotesBox } from './styled';

export function NotesPage() {
  return (
    <>
      <Header />
      <NotesBox>
        <SearchBar />
        <Notes />
      </NotesBox>
    </>
  );
}

export default NotesPage;
