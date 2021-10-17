import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import arrow from '../Assets/RedArrow.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      colour: 'black'
    },
  },
  arrow: {
    colour: 'red'
  }
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={process.env.PUBLIC_URL + '/Etourist3'}>
        <Button variant="outlined" href="">
          Most E Tourist Visas for the Year 2019
          <img src={arrow} className="arrow" alt="arrow" />
        </Button>
      </Link>
    </div>
  );
}