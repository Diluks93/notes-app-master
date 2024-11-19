import React, { useState } from 'react';
import Head from 'next/head';
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import GlobalStyle from '../client/components/GlobalStyle';

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 0,
          },
        },
      }),
  );

  return (
    <>
      <Head>
        <title>NOTES-APP-MASTER</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <GlobalStyle />
          <ReactQueryDevtools initialIsOpen={false} />
          <StyleSheetManager shouldForwardProp={isPropValid}>
            <Component {...pageProps} />
          </StyleSheetManager>
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}

export default App;
