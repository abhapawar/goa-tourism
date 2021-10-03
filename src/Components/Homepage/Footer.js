import React from 'react';
import TermsandConditions from './TermsandConditions';
import Disclaimer from './Disclaimer';
import PrivacyPolicies from './PrivacyPolicies';
import HyperlinkingPolicies from './HyperlinkingPolicies';
import Help from './Help';
import CallUs from './CallUs';
import Email from './Email';
import YouTube from './YouTube';
import Twitter from './Twitter';
import Facebook from './Facebook';
import Instagram from './Instagram';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Box } from '@material-ui/core';

export default function AppFooter() {
  return (
    <div className="root">

      <footer className="App-footer">
        <div className="flexbox-container">
          <Paper elevation={0}>
            Policies

          </Paper>
          <TermsandConditions />
          <Disclaimer />
          <PrivacyPolicies />
          <HyperlinkingPolicies />
          <Help />
          <Paper elevation={0}>
            Contact Us
          </Paper>
          <Paper elevation={0}>
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
                <YouTube />
              </Grid>
              <Grid item xl={3} xs={3}>
                <Twitter />
              </Grid>
              <Grid item xl={3} xs={3}>
                <Facebook />
              </Grid>
              <Grid item xl={3} xs={3}>
                <Instagram />
              </Grid>
            </Grid>
          </Box>
          <Paper elevation={0}>
            Copyright ©️ 2021. All Rights Reserved. This is the official website of Goa Tourism Department, Govt of Goa.
          </Paper>

        </div>
      </footer>

    </div>
  );
}