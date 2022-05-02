import {createTheme} from '@mui/material';
import {MuiButton} from './overrides/MuiButton';
import {palette} from './palette';

export const exam2Theme = createTheme({
  palette,
  components: {
    MuiButton,
  },
});
