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

export default function Goahomepage() {
  return (
    <React.Fragment>
      <Container fixed>

        <Grid item xl={12} xs={12}>
          <img src={GoaGovernment} className="Government of Goa" alt="Government of Goa" width="30%" height="30%" />
        </Grid>

        <Paper elevation={0}>
          Department of Tourism Goa
        </Paper>

        <Paper elevation={0}>
          Government of Goa
        </Paper>

        <SwipeableTextMobileStepper />
        <Paper elevation={0}>
          <div>
            Welcome to Goa Tourism Department
          </div>
          <div>
            <img src={Department} className="Department of Goa" alt="Department of Goa" width="100%" height="100%" />
          </div>
          <div>
            The Administrative head of the Department is Shri J. Ashok Kumar, IAS, Secretary Tourism. The Department has a zonal office in North Goa at Headquarters, Panaji and in South Goa at Margao.
            The Current Director of Tourism is Shri Menino D’souza.
            The Public Grievances Officer is Dy. Director (Administration).
            The Tourist Information Centres/Counters are located within the State and in Mumbai (temporarily closed). The Zonal Officers are primarily responsible for monitoring the Registration of Tourist Trade under the Tourist Trade Act, 1982.
          </div>
          <div>
            <ReadMore />
          </div>
        </Paper>

        <Paper elevation={0}>
          Travel Essentials
        </Paper>

        <TextMobileStepper />

        <Latest1 />
        <Latest2 />
        <Latest3 />

        <Paper elevation={0}>
          A Glimpse into the Beauty of Goa
          <img src={Video} className="Beauty of Goa" alt="Beauty of Goa" width="100%" height="100%" />
        </Paper>
      </Container>
    </React.Fragment >
  );
}