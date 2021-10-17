import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedButtons from '../Components/StatsButton1';
import OutlinedButtons2 from '../Components/StatsButton2';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: 18
  }
}))

export default function Statistics2() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={0} className={classes.heading}>
          Statistics
        </Paper>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <OutlinedButtons />
          </Grid>

          <Grid item xs={12}>
            <OutlinedButtons2 />
          </Grid>
        </Grid>

      </Container>
    </React.Fragment >
  );
}