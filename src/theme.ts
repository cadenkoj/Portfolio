import { ThemeOptions, createTheme } from "@mui/material/styles";

const baseTheme = {
  typography: {
    fontFamily: "Raleway, sans-serif",
    fontSize: 16,
  },
  palette: {
    mode: "dark",
    primary: { main: "#366aeb" },
    secondary: { main: "#adbadb" },
    background: {
      default: "#12192b",
      paper: "#12192b",
    },
    text: {
      primary: "#e0e9ff",
      secondary: "#adbadb",
    },
  },
  shape: {
    borderRadius: 16,
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
          backgroundColor: "#366aeb50",
          color: "initial",
        },
        body: {
          overflowY: "scroll",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#12192b",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#366aeb25",
            minHeight: 24,
            border: "3px solid #12192b",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 1,
        keepMounted: true,
      },
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          textTransform: "uppercase",
          fontWeight: 700,
        },
        body1: {
          color: baseTheme.palette.text.secondary,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: { rel: "noopener noreferrer" },
    },
    MuiIconButton: {
      defaultProps: { color: "secondary" },
    },
  },
};

export const theme = createTheme({ ...baseTheme, ...componentOverrides });
