import {Theme} from '@mui/material';
import {SimplePaletteColorOptions} from '@mui/material/styles/createPalette';
import {ComponentsOverrides} from '@mui/material/styles/overrides';
import {ComponentsProps} from '@mui/material/styles/props';
import {ComponentsVariants} from '@mui/material/styles/variants';
import {palette} from '../palette';

type MuiOutlinedInputStyles = {
  defaultProps?: ComponentsProps['MuiOutlinedInput'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiOutlinedInput'];
  variants?: ComponentsVariants['MuiOutlinedInput'];
}

const primaryMain = (palette.primary as SimplePaletteColorOptions).main;
const tutorMain = '#FF9B33';

export const MuiOutlinedInput: MuiOutlinedInputStyles = {
  styleOverrides: {
    root: {
      'border': '3px solid rgba(255, 255, 255, .5)',
      'borderRadius': 6,
      '&.Mui-focused': {
        'borderColor': tutorMain,
      },
      '& fieldset': {
        'border': 'none',
      },
    },
    input: {
      'color': primaryMain,
      'fontSize': 14,
      'fontWeight': 400,
      'lineHeight': 21,
      'letterSpacing': 0.25,
    },
  },
};
