import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      colour: 'black',
      textTransform: 'capitalize',
    },
  },
  download: {
    borderStyle: 'solid',
    borderColor: '#EEA538'
  }
}));

export default function OutlinedButtons3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" className={classes.download}>
        Download
      </Button>
    </div>
  );
}