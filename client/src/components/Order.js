import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchName } from "./actions/name";
import { createOrder } from "./actions/order";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
const Order = () => {
  const [checked, setChecked] = useState(false);
  const initialState = {
    name: "",
    type: checked ? "Buy" : "Sell",
    quantity: "",
    price: "",
    date: "",
  };
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createOrder(data));
    console.log(data);
  };
  useEffect(() => {
    dispatch(fetchName());
  }, [dispatch]);
  const stock = useSelector((state) => state.name);
  const stockArray = stock.map((stockName) => {
    return stockName.name;
  });
  var type;

  if (checked) {
    type = "Buy";
  } else {
    type = "Sell";
  }

  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
    setData({ ...data, type: type });
  };
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
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <form onSubmit={handleSubmit}>
              <Paper
                sx={{
                  height: 420,
                  width: 420,
                  background: checked ? "blue" : "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 400,
                    width: 400,
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ height: 17, alignSelf: "end" }}
                  >
                    <Typography>Sell</Typography>
                    <AntSwitch
                      name="checked"
                      checked={checked}
                      onChange={handleSwitchChange}
                      inputProps={{ "aria-label": "ant design" }}
                    />
                    <Typography>Buy</Typography>
                  </Stack>
                  <Typography component="h1" variant="h6" color="inherit">
                    Stock Mockup
                  </Typography>
                  <Autocomplete
                    disablePortal
                    getOptionLabel={(option) => option}
                    size="small"
                    id="combo-box-demo"
                    options={stockArray}
                    sx={{ width: 300 }}
                    filterSelectedOptions
                    onChange={(e, value) => setData({ ...data, name: value })}
                    renderInput={(params) => (
                      <TextField {...params} label="Stock Name" />
                    )}
                  />
                  <TextField
                    name="quantity"
                    variant="outlined"
                    label="Quantity"
                    size="small"
                    sx={{ width: 300 }}
                    onChange={(e) =>
                      setData({ ...data, quantity: e.target.value })
                    }
                  />
                  <TextField
                    name="price"
                    variant="outlined"
                    label="Price"
                    size="small"
                    sx={{ width: 300 }}
                    onChange={(e) =>
                      setData({ ...data, price: e.target.value })
                    }
                  />
                  <TextField
                    name="date"
                    variant="outlined"
                    label="Date"
                    size="small"
                    sx={{ width: 300 }}
                    onChange={(e) => setData({ ...data, date: e.target.value })}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    sx={{ width: 300 }}
                  >
                    Submit
                  </Button>
                </Paper>
              </Paper>
            </form>
          </Grid>
          <Grid item xs={12}>
            <Paper
              sx={{ p: 2, display: "flex", flexDirection: "column" }}
            ></Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Order;
