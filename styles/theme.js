import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import HelveticaWoff2 from "../src/assets/HelveticaNeueCyr-Roman.woff";
import KalpurushWoff2 from "../src/assets/Kalpurush.woff";

const helveticaNeue = {
  fontFamily: "Helvetica Neue",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Helvetica Neue'),
    url(${HelveticaWoff2}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const kalpurush = {
  fontFamily: "Kalpurush",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Kalpurush'),
    url(${KalpurushWoff2}) format('woff2')
  `,
 };

export const muiLightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: "#377dff",
      },
      background: {
        default: "#fff",
      },
      text: {
        primary: "#1e2022",
        secondary: "#677788",
      },
    },
    typography: {
      fontFamily: ["Helvetica", "Arial", "Kalpurush"].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "@global": {
            "@font-face": [helveticaNeue, kalpurush],
            "*:focus": {
              outline: 0,
              // eslint-disable-next-line no-dupe-keys
              outline: 'none',
            },
            "*": {
              "scrollbar-width": "thin",
            },
            "*::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
              backgroundColor: "#cccccc50",
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor: "#377dff",
              borderRadius: "20px",
            },
            "*::-moz-selection": {
              /* Code for Firefox */ color: "black",
              background: "#fff172",
            },
  
            "*::selection": {
              color: "black",
              background: "#fff172",
            },
            "*body": {
              fontFamily: `'Helvetica Neue', 'Kalpurush', Arial, sans-serif`,
            },
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        i5: 350,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  })
);

export const muiDarkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#6ab0f3",
      },
      background: {
        default: "#1d1d1d",
      },
    },
    typography: {
      fontFamily: ["Helvetica", "Kalpurush"].join(","),
    },
    // transitions: {
    //   duration: {
    //     shortest: 150,
    //     shorter: 200,
    //     short: 250,
    //     standard: 1000,
    //     complex: 375,
    //     enteringScreen: 225,
    //     leavingScreen: 195,
    //   },
    //   easing: {
    //     // This is the most common easing curve.
    //     easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    //     // Objects enter the screen at full velocity from off-screen and
    //     // slowly decelerate to a resting point.
    //     easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    //     // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    //     easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    //     // The sharp curve is used by objects that may return to the screen at any time.
    //     sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    //   },
    // },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "@global": {
            "@font-face": [helveticaNeue, kalpurush],
            "*:focus": {
              outline: 0,
              // eslint-disable-next-line no-dupe-keys
              outline: 'none',
            },
            "*": {
              "scrollbar-width": "thin",
            },
            "*::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
              backgroundColor: "#cccccc50",
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor: "#6ab0f3",
              borderRadius: "20px",
            },
            "*::-moz-selection": {
              /* Code for Firefox */ color: "white",
              background: "#6ab0f3",
            },
            "*::selection": {
              color: "white",
              background: "#6ab0f3",
            },
            "*body": {
              fontFamily: `'Helvetica Neue', 'Kalpurush', Arial, sans-serif`,
            },
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        i5: 350,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  })
);
