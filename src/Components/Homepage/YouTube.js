import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function YouTube() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">
        <YouTubeIcon/>
      </Button>
    </div>
  );
}