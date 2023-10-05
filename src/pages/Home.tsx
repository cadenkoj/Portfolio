import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  SiAmazonaws,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPnpm,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTypescript,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si";

import Container from "../components/Container.tsx";
import Mail from "../components/Mail.tsx";
import RepoCard from "../components/RepoCard.tsx";

const repositories = {
  username: "KojiOdyssey",
  names: ["Portfolio", "WatchGuard", "Koex", "Anim-API"],
};

const technology = [
  {
    name: "Amazon Web Services",
    url: "https://aws.amazon.com/",
    Icon: SiAmazonaws,
  },
  {
    name: "Express",
    url: "https://expressjs.com/",
    Icon: SiExpress,
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    Icon: SiGit,
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    Icon: SiGithub,
  },
  {
    name: "JavaScript",
    url: "https://www.javascript.com/",
    Icon: SiJavascript,
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    Icon: SiMongodb,
  },
  {
    name: "Material UI",
    url: "https://mui.com/",
    Icon: SiMui,
  },
  {
    name: "Next.js",
    url: "https://nextjs.org/",
    Icon: SiNextdotjs,
  },
  {
    name: "Node.js",
    url: "https://nodejs.org/",
    Icon: SiNodedotjs,
  },
  {
    name: "PNPM",
    url: "https://pnpm.io/",
    Icon: SiPnpm,
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
    Icon: SiPostgresql,
  },
  {
    name: "Prisma",
    url: "https://www.prisma.io/",
    Icon: SiPrisma,
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    Icon: SiReact,
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    Icon: SiTypescript,
  },
  {
    name: "Visual Studio Code",
    url: "https://code.visualstudio.com/",
    Icon: SiVisualstudiocode,
  },
  {
    name: "Vite",
    url: "https://vitejs.dev/",
    Icon: SiVite,
  },
];

export default function Home() {
  return (
    <Container>
      <Grid
        item
        xs={12}
        lg={4}
        py={6}
        sx={{
          display: "flex",
          position: { sx: "inherit", md: "sticky" },
          top: "0",
          flexDirection: "column",
          maxHeight: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ textAlign: { xs: "center", md: "left" } }}
            gutterBottom
          >
            Caden
          </Typography>
          <Typography
            variant="h6"
            sx={{ textAlign: { xs: "center", md: "left" } }}
            gutterBottom
          >
            Software Developer
          </Typography>
          <Typography sx={{ textAlign: { xs: "center", md: "left" } }}>
            I create advanced web-based products and digital experiences.
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Typography
            fontFamily="monospace"
            fontWeight={700}
            sx={{ paddingBottom: "30px" }}
          >
            © Caden 2023
          </Typography>
          <Grid container spacing={1}>
            {technology.map(({ name, url, Icon }) => (
              <Grid item key={name} xs={1.5}>
                <Grid item display="flex" justifyContent="flex">
                  <IconButton href={url} target="_blank" size="small">
                    <Icon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} lg={8} py={6}>
        <Typography
          variant="h6"
          sx={{ textAlign: { xs: "center", md: "left" } }}
          gutterBottom
        >
          About Me
        </Typography>
        <Typography textAlign="justify" pb={4}>
          A few years ago, just before the pandemic, I started building simple
          websites for fun. I instantly realized that I loved being able to
          bring my concepts to life through code. Ever since, I've been making
          frontend, backend, and a large variety of other projects.
        </Typography>
        <Typography textAlign="justify" pb={4}>
          I started the same as many people, with HTML, CSS, and JavaScript. I
          loved watching videos and learning more about in-depth concepts to
          improve my projects. Then, I moved on to{" "}
          <Link href="https://nodejs.org/">Node.js</Link>, and frameworks like{" "}
          <Link href="https://react.dev/">React</Link>, which I still use today.
          One major inspiration to me was{" "}
          <Link href="https://fireship.io/">Fireship</Link>. I enjoyed taking my
          spin on tutorial projects, while making them my own.
        </Typography>
        <Typography textAlign="justify" pb={4}>
          I also have experience working on applications that interact with the{" "}
          <Link href="https://discord.com/developers/docs/intro/">
            Discord API
          </Link>
          . I have created some personal projects, but would love to start
          sharing my work with others! These projects have extensive moderation
          features that make use of APIs like{" "}
          <Link href="https://safebrowsing.google.com/">
            Google Safe Browsing
          </Link>{" "}
          and <Link href="https://perspectiveapi.com/">Perspective API</Link>.
        </Typography>
        <Typography
          variant="h6"
          sx={{ textAlign: { xs: "center", md: "left" } }}
          gutterBottom
        >
          Projects
        </Typography>
        <Stack direction="column" spacing={1}>
          {repositories.names.map((repoName) => (
            <RepoCard username={repositories.username} repoName={repoName} />
          ))}
        </Stack>
        <br />
        <Mail />
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <br />
          <Typography
            fontFamily="monospace"
            fontWeight={700}
            textAlign="center"
            sx={{ paddingBottom: "30px" }}
          >
            © Caden 2023
          </Typography>
          <Grid container spacing={1}>
            {technology.map(({ name, url, Icon }) => (
              <Grid item key={name} xs={1.5} textAlign="center">
                <IconButton href={url} target="_blank" size="small">
                  <Icon />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}
