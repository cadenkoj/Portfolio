import "@fontsource/inter";

import { ThemeOptions, createTheme } from "@mui/material/styles";

const baseTheme = {
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  palette: {
    mode: "dark",
    primary: { main: "#4f9cff" },
    secondary: { main: "#0d1d33" },
    background: {
      default: "#0d1d33",
      paper: "#0d1d33",
    },
  },
  shape: {
    borderRadius: 12,
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
} satisfies ThemeOptions;

const componentOverrides: Pick<ThemeOptions, "components"> = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::selection": {
          backgroundColor: "#4f9cff50",
          color: "initial",
        },
        body: {
          overflowY: "scroll",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#0d1d33",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#4f9cff10",
            minHeight: 24,
            border: "3px solid #0d1d33",
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          zIndex: baseTheme.zIndex.drawer + 1,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          width: "80%",
          margin: "0 auto",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontWeight: 700,
          letterSpacing: ".3rem",
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 1,
        keepMounted: true,
      },
    },
    MuiLink: {
      defaultProps: {
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    MuiButtonBase: {
      defaultProps: {
        rel: "noopener noreferrer",
      },
    },
  },
};

export const theme = createTheme({ ...baseTheme, ...componentOverrides });
