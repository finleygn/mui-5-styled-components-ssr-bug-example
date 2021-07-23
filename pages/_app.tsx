import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import styled from 'styled-components';
import Head from 'next/head';
import theme from '../src/theme';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const Example = styled(Box)`
  ${({ theme }) => {
    return {
      backgroundColor: theme.palette.primary.main,
      width: '200px',
      height: '200px',
    }
  }}
`;

const Example2 = styled(Button)`
  border: none;
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Next App</title>
        <link href="/favicon.ico" rel="icon" />
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Example bgcolor="secondary.main" />
        <Example2 variant="outlined">Hello</Example2>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
