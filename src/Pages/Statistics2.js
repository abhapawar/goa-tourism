import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedButtons from '../Components/StatsButton1';
import OutlinedButtons2 from '../Components/StatsButton2';
import Paper from '@material-ui/core/Paper';

export default function Statistics2() {
  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={0}>
          Statistics
        </Paper>
        <div>
          <OutlinedButtons />
        </div>
        <div>
          <OutlinedButtons2 />
        </div>
      </Container>
    </React.Fragment>
  );
}