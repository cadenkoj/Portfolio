import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <Box
      width="100%"
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      sx={{ paddingX: { xs: 4, md: 12 } }}
    >
      <Grid
        container
        display="flex"
        maxWidth="1366px"
        sx={{
          gap: { xs: 0, md: 12 },
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        {children}
      </Grid>
    </Box>
  );
}

export default Container;
