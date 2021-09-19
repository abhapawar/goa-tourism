import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedButtons from '../Components/statsbutton1';
import OutlinedButtons2 from '../Components/statsbutton2';

export default function Statistics2() {
  return (
    <React.Fragment>
        <Container fixed>
          <p>
            Statistics
            </p>
        <OutlinedButtons/>
        <OutlinedButtons2/>
        </Container>
    </React.Fragment>
  );
}