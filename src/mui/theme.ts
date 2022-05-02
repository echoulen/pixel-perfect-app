import {createTheme} from '@mui/material';
import {MuiButton} from './overrides/MuiButton';
import {MuiOutlinedInput} from './overrides/MuiOutlinedInput';
import {palette} from './palette';

export const exam2Theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, Open Sans, sans-serif',
  },
  palette,
  components: {
    MuiButton,
    MuiOutlinedInput,
  },
});
