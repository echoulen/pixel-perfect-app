import {createTheme} from '@mui/material';
import {MuiButton} from './overrides/MuiButton';
import {MuiOutlinedInput} from './overrides/MuiOutlinedInput';
import {palette} from './palette';

export const exam2Theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, Open Sans, sans-serif',
    body1: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0.15,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.25,
    },
  },
  palette,
  components: {
    MuiButton,
    MuiOutlinedInput,
  },
});
