import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, Nationality, Visa) {
  return { name, Nationality, Visa };
}

const rows = [
  createData('1', 'Australia', 131),
  createData('2', 'Bulgaria', 339),
  createData('3', 'Czcheck Republic', 309),
  createData('4', 'Denmark', 857),
  createData('5', 'Estonia', 430),
  createData('6', 'Finland', 1428),
  createData('7', 'Germany', 1384),
  createData('8', 'Hungary', 65),
  createData('9', 'Iran', 877),
  createData('10', 'Jordan', 93),
  createData('11', 'Kazakhstan', 3128),
  createData('12', 'Lithuania', 184),
  createData('13', 'Mexico', 17),
  createData('14', 'Norway', 422),
  createData('15', 'Oman', 208),
  createData('16', 'Portugal', 709),
  createData('17', 'Qatar', 30),
  createData('18', 'Russian Federation', 24398),
  createData('19', 'Sweden', 1396),
  createData('20', 'Thailand', 1428),
  createData('21', 'United Kingdom', 38292),
  createData('22', 'Vietnam', 6),
  createData('23', 'Zimbabwe', 7),
  
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr. No.</TableCell>
            <TableCell align="right">Nationality (Alphabetical)</TableCell>
            <TableCell align="right">Visa&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Nationality}</TableCell>
              <TableCell align="right">{row.Visa}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
