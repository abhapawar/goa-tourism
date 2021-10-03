import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedButons4 from '../Components/DownloadButton2';
import BasicTable2 from '../Components/Table2';
import { Link, Router } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import FrontArrow from '../Assets/FrontArrow.svg';
import { Box } from '@material-ui/core';

export default function Arrivals7() {
  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={0}>
          Statistics
        </Paper>

        <Paper elevation={0}>
          Arrivals by Charter Flights during Season
        </Paper>
        <BasicTable2 />
        <Box>
          <Grid container spacing={0} alignItems="center" >
            <Grid item xl={4} xs={4}>
              <Link to={process.env.PUBLIC_URL + '/Etourist3'}>
                <img src={FrontArrow} alt='FrontArrow' />
              </Link>
            </Grid>
            <Grid item xl={4} xs={4}>
              <OutlinedButons4 />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}