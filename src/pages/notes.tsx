import styled from 'styled-components';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import axios from 'axios';

import { Header, Notes, SearchBar } from '../client/components';
import { KEY } from '../client/constants';

const NotesBox = styled.div`
  max-height: 90vh;
  height: calc(100% - 80px);
  padding: 45px 50px;
  overflow-x: auto;
`;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [KEY.NOTES],
    queryFn: async () =>
      (await axios.get(`${process.env.BASE_URL}/${KEY.NOTES}`)).data,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function NotesPage({ dehydratedState }) {
  return (
    <>
      <Header />
      <NotesBox>
        <HydrationBoundary state={dehydratedState}>
          <SearchBar />
          <Notes />
        </HydrationBoundary>
      </NotesBox>
    </>
  );
}

export default NotesPage;
