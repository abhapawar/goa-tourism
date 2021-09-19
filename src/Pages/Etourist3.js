import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedButtons3 from '../Components/downloadbutton1';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import BasicTable from '../Components/table1';

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
        <ArrowBackIosRoundedIcon />
        <ArrowForwardIosRoundedIcon />
      </Container>
    </React.Fragment>
  );
}