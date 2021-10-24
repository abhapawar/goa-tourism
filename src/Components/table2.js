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
    minWidth: 300,
  },
  text: {
    fontSize: 11,
  }
});

function createData(name, No_of_Flights, Passengers) {
  return { name, No_of_Flights, Passengers };
}

const rows = [
  createData('2000-2001', 419, 116992),
  createData('2001-2002', 279, 76410),
  createData('2002-2003', 284, 94350),
  createData('2003-2004', 532, 126255),
  createData('2004-2005', 690, 158993),
  createData('2005-2006', 719, 180310),
  createData('2006-2007', 720, 169836),
  createData('2007-2008', 758, 185994),
  createData('2008-2009', 615, 145428),
  createData('2009-2010', 626, 137790),
  createData('2010-2011', 900, 171367),
  createData('2011-2012', 910, 169006),
  createData('2012-2013', 996, 215304),
  createData('2013-2014', 1128, 261452),
  createData('2014-2015', 895, 161316),
  createData('2015-2016', 798, 158779),
  createData('2016-2017', 988, 232679),
  createData('2017-2018', 981, 247365),
  createData('2018-2019', 813, 218776),
];

export default function BasicTable2() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.text}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.text} align="center">Year</TableCell>
              <TableCell className={classes.text} align="center">No. of Flights</TableCell>
              <TableCell className={classes.text} align="center">Passengers&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className={classes.text} align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className={classes.text} align="center">{row.No_of_Flights}</TableCell>
                <TableCell className={classes.text} align="center">{row.Passengers}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
