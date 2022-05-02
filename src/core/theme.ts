import {createTheme} from '@mui/material';

const primaryMain = '#FFFFFF';
const backgroundDefault = '#121212';

export const exam2Theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: primaryMain,
    },
    error: {
      main: '#F86754',
    },
    background: {
      default: backgroundDefault,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          'gap': '10px',
          'fontWeight': 700,
          'fontSize': '14px',
          'textTransform': 'uppercase',
          'border': `1px solid ${primaryMain}`,
          'borderRadius': '4px',
          'color': backgroundDefault,
          'backgroundColor': primaryMain,
          'height': '40px',
          '&:hover': {
            'color': primaryMain,
            'backgroundColor': backgroundDefault,
          },
        },
        outlined: {
          'fontFamily': 'Open Sans',
          'fontWeight': 600,
          'fontSize': '12px',
          'letterSpacing': '-0.05px',
          'textTransform': 'capitalize',
          'padding': '8px 10px 8px 10px',
          'border': `1px solid ${primaryMain}`,
          'borderRadius': '20px',
          'minWidth': '60px',
          'height': '29px',
          'lineHeight': '12px',
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
          'fontSize': '12px',
          'letterSpacing': '-0.05px',
          'textTransform': 'capitalize',
          'padding': '8px 10px 8px 10px',
          'border': `1px solid ${primaryMain}`,
          'borderRadius': '20px',
          'minWidth': '60px',
          'height': '29px',
          'lineHeight': '12px',
          'color': backgroundDefault,
          'backgroundColor': primaryMain,
          '&:hover': {
            'color': primaryMain,
            'backgroundColor': backgroundDefault,
          },
        },
      },
    },
  },
});
