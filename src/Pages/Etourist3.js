import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedButtons3 from '../Components/DownloadButton1';
import BasicTable from '../Components/Table1';
import { Link, Router } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import FrontArrow from '../Assets/FrontArrow.svg';
import BackArrow from '../Assets/BackArrow.svg';
import { Box } from '@material-ui/core';

export default function Etourist3() {
  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={0}>
          Statistics
        </Paper>

        <Paper elevation={0}>
          Most E Tourist Visa for the Year 2019
        </Paper>
        <BasicTable />
        <Box>
          <Grid container spacing={0} justifyContent="center" alignItems="center" >
            <Grid item xl={4} xs={4}>
              <Link to={process.env.PUBLIC_URL + '/Statistics2'}>
                <img src={FrontArrow} alt='FrontArrow' />
              </Link>
            </Grid>
            <Grid item xl={4} xs={4}>
              <OutlinedButtons3 />
            </Grid>
            <Grid item xl={4} xs={4}>
              <Link to={process.env.PUBLIC_URL + '/Arrivals4'}>
                <img src={BackArrow} alt='BackArrow' />
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}