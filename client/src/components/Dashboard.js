import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import WatchList from "./WatchList";
const Dashboard = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        pt: 10,
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 500,
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                color="inherit"
                alignSelf="center"
                sx={{ mb: 2 }}
              >
                WatchList
              </Typography>
              <WatchList />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                color="inherit"
                alignSelf="center"
              >
                Summary
              </Typography>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Typography variant="h8" color="inherit">
                  Total Units
                </Typography>
                <Typography variant="h8" color="inherit">
                  100
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Typography variant="h8" color="inherit">
                  Total Investment
                </Typography>
                <Typography variant="h8" color="inherit">
                  100
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Typography variant="h8" color="inherit">
                  Sold Value(amount)
                </Typography>
                <Typography variant="h8" color="inherit">
                  100
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Typography variant="h8" color="inherit">
                  Current Value(amount)
                </Typography>
                <Typography variant="h8" color="inherit">
                  100
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
