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
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchName } from "./actions/name";
import { createOrder } from "./actions/order";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const columns = [
  { id: "number", label: "S.N", minWidth: 170 },
  { id: "name", label: "Stock name", minWidth: 100 },
  {
    id: "type",
    label: "Transaction Type",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "date",
    label: "Transaction Date",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(number, name, type, quantity, amount, date) {
  return { number, name, type, quantity, amount, date };
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Order = () => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState();
  const [num, setNum] = useState(0);
  const [rows, setRows] = useState([
    createData(1, "Standard Chartered Bank", "buy", 100, 500, "01/01/2021"),
  ]);
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
    if (
      data.name === "" ||
      data.type === "" ||
      data.price === "" ||
      data.date === "" ||
      data.quantity === ""
    ) {
      setError(true);
    } else {
      dispatch(createOrder(data));
      setNum(num + 1);
      setRows([
        ...rows,
        createData(
          num,
          data.name,
          data.type,
          data.quantity,
          data.price,
          data.date
        ),
      ]);
      setOpen(true);
      clear();
      setError(false);
    }
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

  const clear = () => {
    setData(initialState);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
        paddingTop: 10,
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
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
                    <Switch
                      name="checked"
                      checked={checked}
                      onChange={handleSwitchChange}
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
                    value={data.name}
                    sx={{ width: 300 }}
                    filterSelectedOptions
                    onChange={(e, value) => setData({ ...data, name: value })}
                    renderInput={(params) => (
                      <TextField {...params} label="Stock Name" error={error} />
                    )}
                  />
                  <TextField
                    name="quantity"
                    variant="outlined"
                    label="Quantity"
                    size="small"
                    error={error}
                    sx={{ width: 300 }}
                    value={data.quantity}
                    onChange={(e) =>
                      setData({ ...data, quantity: e.target.value })
                    }
                  />
                  <TextField
                    name="price"
                    variant="outlined"
                    label="Price"
                    size="small"
                    error={error}
                    sx={{ width: 300 }}
                    value={data.price}
                    onChange={(e) =>
                      setData({ ...data, price: e.target.value })
                    }
                  />
                  <TextField
                    name="date"
                    variant="outlined"
                    label="Date"
                    size="small"
                    error={error}
                    sx={{ width: 300 }}
                    value={data.date}
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
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography
                component="h1"
                variant="h5"
                color="inherit"
                sx={{ alignSelf: "center" }}
              >
                Order Book
              </Typography>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows

                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.code}
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Order Successful
          </Alert>
        </Snackbar>
      </Stack>
    </Box>
  );
};

export default Order;
