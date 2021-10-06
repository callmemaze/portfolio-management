import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  number,
  name,
  unit,
  totalInvestment,
  soldValue,
  currentValue
) {
  return { number, name, unit, totalInvestment, soldValue, currentValue };
}

const rows = [
  createData(1, "Standard Chartered Bank", 100, 10000, 5000, 50000, 87764),
  createData(2, "Nepal Investment Bank", 100, 10000, 5000, 50000, 87764),
  createData(3, "Nabil Bank", 100, 10000, 5000, 50000, 87764),
  createData(4, "Asian Life Insurance", 100, 10000, 5000, 50000, 87764),
];

const WatchList = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.N</StyledTableCell>
            <StyledTableCell align="right">Stock Name</StyledTableCell>
            <StyledTableCell align="right">Total Unit&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Total Investment</StyledTableCell>
            <StyledTableCell align="right">Sold Value</StyledTableCell>
            <StyledTableCell align="right">Current Value</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.number}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.unit}</StyledTableCell>
              <StyledTableCell align="right">
                {row.totalInvestment}
              </StyledTableCell>
              <StyledTableCell align="right">{row.soldValue}</StyledTableCell>
              <StyledTableCell align="right">
                {row.currentValue}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WatchList;
