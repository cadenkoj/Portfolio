import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import ParticleBackground from "./components/ParticleBackground.tsx";
import Home from "./pages/Home.tsx";
import { theme } from "./theme.ts";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <ParticleBackground />
      <Home />
    </ThemeProvider>
  );
}
