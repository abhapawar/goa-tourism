import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedButtons3 from '../Components/DownloadButton1';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import BasicTable from '../Components/Table1';
import { Link, Router } from "react-router-dom";

export default function Etourist3() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          Statistics
        </p>

        <p>
          Most E Tourist Visa for the Year 2019
        </p>
        <BasicTable />
        <OutlinedButtons3 />
        <Link to={process.env.PUBLIC_URL + '/Statistics2'}>
        <ArrowBackIosRoundedIcon />
        </Link>
        <Link to={process.env.PUBLIC_URL + '/Arrivals4'}>
      <ArrowForwardIosRoundedIcon/>
      </Link>
    </Container>
    </React.Fragment >
  );
}