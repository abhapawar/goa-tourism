import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedButons4 from '../Components/DownloadButton2';
import BasicTable2 from '../Components/Table2';
import ArrowBackIosRounded from '@material-ui/icons/ArrowBackIosRounded';

export default function Arrivals7() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          Statistics
        </p>
        <p>
          Arrivals by Charter Flights during Season
        </p>
        <BasicTable2 />
        <OutlinedButons4/>
        <ArrowBackIosRounded />
      </Container>
    </React.Fragment>
  );
}