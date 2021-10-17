import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RedArrow from '../../Assets/RedArrow.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Latest1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined">
        Latest Updates
        <img src={RedArrow} className="RedArrow" alt="RedArrow" />
      </Button>
    </div>
  );
}