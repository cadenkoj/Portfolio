import InstagramIcon from "@mui/icons-material/Instagram";
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

import DiscordIcon from "../components/DiscordIcon.tsx";
import GitHubRepoCard from "../components/GitHubRepoCard.tsx";

const repositories = {
  username: "KojiOdyssey",
  names: ["Portfolio", "WatchGuard", "Anim-API", "Koex"],
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
    <Box
      width="100%"
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      sx={{ paddingX: { xs: 4, lg: 12 } }}
    >
      <Grid
        container
        display="flex"
        gap={2}
        maxWidth="1280px"
        sx={{
          flexWrap: { xs: "wrap", lg: "nowrap" },
          justifyContent: { xs: "center", lg: "space-between" },
        }}
      >
        <Grid
          item
          xs={12}
          lg={4}
          py={6}
          sx={{
            display: "flex",
            position: { sx: "inherit", lg: "sticky" },
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
              sx={{
                paddingBottom: "15px",
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Caden
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                paddingBottom: "15px",
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Junior Software Developer
            </Typography>
            <Typography
              sx={{
                paddingBottom: "30px",
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              I create advanced web-based products and digital experiences.
            </Typography>
          </Box>
          <Box>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                justifyContent: { xs: "center", lg: "left" },
                alignItems: { xs: "center", lg: "left" },
              }}
            >
              <IconButton
                href="https://instagram.com/caden.koj/"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://discord.com/users/1092543812527738911/"
                target="_blank"
              >
                <DiscordIcon />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8} py={6}>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              paddingBottom: "15px",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            About Me
          </Typography>
          <Typography
            sx={{
              paddingBottom: "30px",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            A few years back, during the pandemic, I started building simple
            websites, just for fun. I instantly realized that I loved being able
            to bring my ideas to life through code. I've been making frontend,
            backend, and a large variety of miscellaneous projects ever since.
          </Typography>
          <Typography
            sx={{
              paddingBottom: "30px",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            I started the same as many people, with HTML, CSS, and JavaScript. I
            loved watching videos and learning more about in-depth concepts. I
            then moved on to <Link href="https://react.dev/">React</Link>, which
            I still use today. One major inspiration to me was{" "}
            <Link href="https://fireship.io/">Fireship</Link>. I enjoyed taking
            my spin on tutorial projects.
          </Typography>
          <Typography
            sx={{
              paddingBottom: "30px",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            I also have experience working on bots and other projects that
            interact with the{" "}
            <Link href="https://discord.com/developers/docs/intro/">
              Discord API
            </Link>
            . I have made some personal projects, but would love to start
            sharing my work with others! These projects have extensive
            moderation features that make use of{" "}
            <Link href="https://cloud.google.com/apis/docs/overview/">
              Google APIs
            </Link>{" "}
            like{" "}
            <Link href="https://safebrowsing.google.com/">
              Google Safe Browsing
            </Link>{" "}
            and <Link href="https://perspectiveapi.com/">Perspective API</Link>.
          </Typography>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              paddingBottom: "15px",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            sx={{
              paddingBottom: "30px",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            Want to buy a custom bot, website, or other project? Or just want to
            chat? Feel free to contact me on{" "}
            <Link href="https://instagram.com/caden.koj/">Instagram</Link> or{" "}
            <Link href="https://discord.com/users/1092543812527738911/">
              Discord
            </Link>{" "}
            → <b>@caden.koj</b>
          </Typography>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              paddingBottom: "15px",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            Projects
          </Typography>
          <Stack direction="column" spacing={1}>
            {repositories.names.map((repoName) => (
              <GitHubRepoCard
                username={repositories.username}
                repoName={repoName}
              />
            ))}
          </Stack>
          <br />
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              paddingBottom: "15px",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            Technology
          </Typography>
          <Grid container spacing={2}>
            {technology.map(({ name, url, Icon }) => (
              <Grid item key={name} xs={3} md={1.5}>
                <Grid
                  item
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                >
                  <IconButton href={url} target="_blank">
                    <Icon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
