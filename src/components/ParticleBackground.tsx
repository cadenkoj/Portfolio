import { useTheme } from "@mui/material";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
// @ts-ignore
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const theme = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                force: 60,
              },
            },
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0,
              },
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: theme.palette.primary.main,
          },
          links: {
            color: theme.palette.primary.main,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.25,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
