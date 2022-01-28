import { createTheme } from '@mui/material';
import shadows, { Shadows } from '@mui/material/styles/shadows';

export const defaultTheme = createTheme({
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
  },
  palette: {
    primary: {
      main: '#2d3142',
      light: '#959eac',
    },
    secondary: {
      main: '#ef8354',
    },
    info: {
      main: '#6380a6',
      light: '#eff2f6',
    }
  },
  shape: {
    borderRadius: 5
  },
  spacing: 5,
  shadows: shadows.map(() => 'none') as Shadows,
})

export const theme = createTheme( defaultTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          maxHeight: defaultTheme.spacing(10),
          padding: defaultTheme.spacing(4, 5),
          lineHeight: '17px',
          textTransform: 'none',
        },
        outlined: {
          border: '1px solid #6c6f7b',
          color: '#6c6f7b'
        },
        contained: {
          backgroundColor: defaultTheme.palette.secondary.main,
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
        },
      }
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          fill: defaultTheme.palette.primary.main,
        },
      
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
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '28px',
          color: defaultTheme.palette.primary.main
        },
        h2: {
          fontWeight: 500,
          fontSize: '22px',
          color: defaultTheme.palette.primary.main
        },
        body1: {
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '19px',
          color: '#b6b7bd'
        }
      }
    },
  },
});

export const secondaryTheme = createTheme(defaultTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          maxHeight: defaultTheme.spacing(10),
          padding: defaultTheme.spacing(4, 5),
          fontWeight: 500,
          lineHeight: '17px',
          textTransform: 'none',
        },
        contained: {
          backgroundColor: defaultTheme.palette.info.light,
          color: defaultTheme.palette.info.main,
          '&:hover': {
            backgroundColor: '#e4ecf7'
          },
          '&:active': {
            ackgroundColor: '#dae7f7'
          },
          '&:disabled': {
            opacity: 0.4
          }
        },
      }
    },
  }
})