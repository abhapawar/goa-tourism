import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RedArrow from '../../Assets/RedArrow.svg'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      textTransform: 'capitalize',
    },
  },
  button: {
    borderRadius: 15,
    width: 300,
  }
}));

export default function Latest3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" className={classes.button}>
        <Grid container spacing={1}>
          <Grid item xl={12}>
            Latest News and Events
          </Grid>
        </Grid>
        <img src={RedArrow} className="RedArrow" alt="RedArrow" />
      </Button>
    </div>
  );
}