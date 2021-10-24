import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'right',
    marginRight: 15,
    '& > *': {
      color: '#562085',
      textTransform: 'capitalize',
    },
  },
}));

export default function ContactUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>Contact Us</Button>
    </div>
  );
}