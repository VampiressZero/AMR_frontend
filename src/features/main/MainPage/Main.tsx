import { Grid, List, ThemeProvider, createTheme } from '@mui/material';
import { FC, Fragment, PropsWithChildren, memo, useCallback } from 'react';

import styles from './Main.module.css';
import { useAppDispatch, useAppSelector } from 'store';
import { Header } from '../Header';

/** Anime page component. */
const MainComponent: FC<PropsWithChildren> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#7673D9',
      }
    },
  });

  return (
    <Fragment>
      <Header />
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Fragment>
  );
};

export const Main = memo(MainComponent);
