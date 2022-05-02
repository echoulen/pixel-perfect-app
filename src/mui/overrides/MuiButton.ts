import {Theme} from '@mui/material';
import {SimplePaletteColorOptions} from '@mui/material/styles/createPalette';
import {ComponentsOverrides} from '@mui/material/styles/overrides';
import {ComponentsProps} from '@mui/material/styles/props';
import {ComponentsVariants} from '@mui/material/styles/variants';
import {palette} from '../palette';

type MuiButtonStyles = {
  defaultProps?: ComponentsProps['MuiButton'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
  variants?: ComponentsVariants['MuiButton'];
}

const primaryMain = (palette.primary as SimplePaletteColorOptions).main;
const backgroundDefault = (palette.background)!!.default;

export const MuiButton: MuiButtonStyles = {
  styleOverrides: {
    root: {
      'gap': 10,
      'fontWeight': 700,
      'fontSize': 14,
      'textTransform': 'uppercase',
      'border': `1px solid ${primaryMain}`,
      'borderRadius': 4,
      'color': backgroundDefault,
      'backgroundColor': primaryMain,
      'height': 40,
      '&:hover': {
        'color': primaryMain,
        'backgroundColor': backgroundDefault,
      },
    },
    outlined: {
      'fontFamily': 'Open Sans',
      'fontWeight': 600,
      'fontSize': 12,
      'letterSpacing': -0.05,
      'textTransform': 'capitalize',
      'padding': '8px 10px 8px 10px',
      'border': `1px solid ${primaryMain}`,
      'borderRadius': 20,
      'minWidth': 60,
      'height': 29,
      'lineHeight': 12,
      'color': primaryMain,
      'backgroundColor': backgroundDefault,
      '&:hover': {
        'color': backgroundDefault,
        'backgroundColor': primaryMain,
      },
    },
    contained: {
      'fontFamily': 'Open Sans',
      'fontWeight': 600,
      'fontSize': 12,
      'letterSpacing': -0.05,
      'textTransform': 'capitalize',
      'padding': '8px 10px 8px 10px',
      'border': `1px solid ${primaryMain}`,
      'borderRadius': 20,
      'minWidth': 60,
      'height': 29,
      'lineHeight': 12,
      'color': backgroundDefault,
      'backgroundColor': primaryMain,
      '&:hover': {
        'color': primaryMain,
        'backgroundColor': backgroundDefault,
      },
    },
  },
};
