import React from 'react';
import TermsandConditions from './TermsandConditions';
import Disclaimer from './Disclaimer';
import PrivacyPolicies from './PrivacyPolicies';
import HyperlinkingPolicies from './HyperlinkingPolicies';
import Help from './Help';
import CallUs from './CallUs';
import Email from './Email';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import YouTube from '../../Assets/YouTube.svg';
import Twitter from '../../Assets/Twitter.svg';
import Facebook from '../../Assets/Facebook.svg';
import Insta from '../../Assets/Insta.svg';

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 'bold',
    margin: 10,
    backgroundColor: '#999999',
    fontSize: 20,
  },
  para: {
    backgroundColor: '#999999',
  }
}));

export default function AppFooter() {
  const classes = useStyles();
  return (
    <div className="root">

      <footer className="App-footer">
        <div className="flexbox-container">
          <Paper elevation={0} className={classes.header}>
            Policies

          </Paper>
          <TermsandConditions />
          <Disclaimer />
          <PrivacyPolicies />
          <HyperlinkingPolicies />
          <Help />
          <Paper elevation={0} className={classes.header}>
            Contact Us
          </Paper>
          <Paper elevation={0} className={classes.para}>
            Goa Tourism Department
            Paryatan Bhavan, 2nd Floor, Patto,
            Panaji-Goa, India 403001
          </Paper>
          <p>
            <CallUs />
          </p>
          <p>
            <Email />
          </p>
          <Box>
            <Grid container spacing={1}>
              <Grid item xl={3} xs={3}>
                <img src={YouTube} className="Youtube" alt="Menu" />
              </Grid>
              <Grid item xl={3} xs={3}>
                <img src={Twitter} className="Twitter" alt="Menu" />
              </Grid>
              <Grid item xl={3} xs={3}>
                <img src={Facebook} className="Facebook" alt="Menu" />
              </Grid>
              <Grid item xl={3} xs={3}>
                <img src={Insta} className="Insta" alt="Menu" />
              </Grid>
            </Grid>
          </Box>
          <Paper elevation={0} className={classes.para}>
            Copyright ©️ 2021. All Rights Reserved. This is the official website of Goa Tourism Department, Govt of Goa.
          </Paper>

        </div>
      </footer>

    </div>
  );
}