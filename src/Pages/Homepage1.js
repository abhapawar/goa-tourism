import React from 'react';
import Container from '@material-ui/core/Container'
import SwipeableTextMobileStepper from '../Components/Homepage/Stepper1';
import TextMobileStepper from '../Components/Homepage/Stepper2';
import Latest1 from '../Components/Homepage/Latest1';
import Latest2 from '../Components/Homepage/Latest2';
import Latest3 from '../Components/Homepage/Latest3';
import ReadMore from '../Components/Homepage/ReadMore';
import Department from '../Assets/Department.jpg';
import GoaGovernment from '../Assets/GoaGovernment.png';
import Video from '../Assets/Video.jpg';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 1,
  },
  subheading: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 10,
  },
  para: {
    margin: 10
  },
  sub: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  video: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 10,
  },
}));


export default function Goahomepage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container fixed>

        <Grid item xl={12} xs={12}>
          <img src={GoaGovernment} className="Government of Goa" alt="Government of Goa" width="100" height="100%" />
        </Grid>

        <Paper elevation={0} className={classes.heading}>
          Department of Tourism Goa
        </Paper>

        <Paper elevation={0}>
          Government of Goa
        </Paper>

        <SwipeableTextMobileStepper />
        <Paper elevation={0} className={classes.subheading}>
          <div>
            Welcome to Goa Tourism Department
          </div>
        </Paper>
        <div>
          <img src={Department} className="Department of Goa" alt="Department of Goa" width="70%" height="70%" />
        </div>
        <div>
          <Paper elevation={0} className={classes.para}>
            The Administrative head of the Department is Shri J. Ashok Kumar, IAS, Secretary Tourism. The Department has a zonal office in North Goa at Headquarters, Panaji and in South Goa at Margao.
            The Current Director of Tourism is Shri Menino D’souza.
            The Public Grievances Officer is Dy. Director (Administration).
            The Tourist Information Centres/Counters are located within the State and in Mumbai (temporarily closed). The Zonal Officers are primarily responsible for monitoring the Registration of Tourist Trade under the Tourist Trade Act, 1982.
          </Paper>
        </div>
        <div>
          <ReadMore />
        </div>

        <Paper elevation={0} className={classes.sub}>
          Travel Essentials
        </Paper>

        <TextMobileStepper />

        <Grid item xl={12} xs={12}>
          <Latest1 />
        </Grid>
        <Grid item xl={12} xs={12}>
          <Latest2 />
        </Grid>
        <Grid item xl={12} xs={12}>
          <Latest3 />
        </Grid>

        <Paper elevation={0} className={classes.video}>
          A Glimpse into the Beauty of Goa
          <img src={Video} className="Beauty of Goa" alt="Beauty of Goa" width="70%" height="70%" />
        </Paper>
      </Container>
    </React.Fragment >
  );
}