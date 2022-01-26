import { createTheme } from '@mui/material';
import shadows, { Shadows } from '@mui/material/styles/shadows';

export const theme = createTheme({
  typography: {
    fontFamily: 'Rubik',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
              font-family: 'Rubik';
              src: url(./fonts/Rubik-Regular.woff2),
                  url(./fonts/Rubik-Regular.woff);
              font-display: swap;
              font-style: normal;
              font-weight: 400;
          }
          @font-face {
              font-family: 'Rubik';
              src: url(./fonts/Rubik-Light.woff2),
                   url(./fonts/Rubik-Light.woff);
              font-display: swap;
              font-style: normal;
              font-weight: 300;
            }
            
            @font-face {
              font-family: 'Rubik';
              src: url(./fonts/Rubik-Medium.woff2),
                   url(./fonts/Rubik-Medium.woff);
              font-display: swap;
              font-style: normal;
              font-weight: 500;
            }
            
            @font-face {
              font-family: 'Rubik';
              src: url(./fonts/Rubik-Bold.woff2),
                   url(./fonts/Rubik-Bold.woff);
              font-display: swap;
              font-style: normal;
              font-weight: 700;
            }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          maxHeight: '50px',
          padding: '20px 25px',
          lineHeight: '17px',
          textTransform: 'none'
        },
        outlined: {
          border: '1px solid #6c6f7b',
          color: '#6c6f7b'
        },
        contained: {
          backgroundColor: '#ef8354',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#fa9569'
          },
          '&:active': {
            backgroundColor: '#e87c4d'
          },
          '&:disabled': {
            opacity: 0.4
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          fill: '#2d3142',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          marginTop: 1,
          border: '1px solid #dee1e7'
        },
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    }
  },

  palette: {
    primary: {
      main: '#2d3142',
      light: '#eff2f6',
    },
    secondary: {
      main: '#ef8354',
    },
    info: {
      main: '#6380a6',
    }
  },
  shape: {
    borderRadius: 5
  },
  spacing: 5,
  shadows: shadows.map(() => 'none') as Shadows,
});