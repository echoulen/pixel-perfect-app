import {ThemeProvider} from '@mui/material';
import React from 'react';
import {exam2Theme} from '../mui/theme';

const TopLayout: React.FunctionComponent = ({children}) => {
  return (
    <ThemeProvider theme={exam2Theme}>{children}</ThemeProvider>
  );
};

export default TopLayout;
