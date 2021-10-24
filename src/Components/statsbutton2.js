import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import arrow from '../Assets/RedArrow.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      colour: 'black',
      textTransform: 'capitalize',
    },
  },
  arrows: {
    colour: 'red'
  }
}));

export default function OutlinedButtons2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={process.env.PUBLIC_URL + '/Arrivals4'}>
        <Button variant="outlined" href="">
          Arrivals by Charter Flights during Season
          <img src={arrow} className="arrow" alt="arrow" />
        </Button>
      </Link>
    </div>
  );
}