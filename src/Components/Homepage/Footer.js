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


export default function AppFooter() {
  return (
    <div className="root">
        
      <footer className="App-footer">
        <div className="flexbox-container">
        <p>
              Policies
            </p>
            <TermsandConditions/>
            <Disclaimer/>
            <PrivacyPolicies/>
            <HyperlinkingPolicies/>
            <Help/>
            <p>
              Contact Us
            </p>
            <p>
              Goa Tourism Department
            </p>
            <p>
              Paryatan Bhavan, 2nd Floor, Patto
            </p>
            <p>
              Panaji-Goa, India 403001
            </p>
            <p>
            <CallUs/>
            </p>
            <p>
            <Email/>
            </p>
            <YouTube/>
            <Twitter/>
            <Facebook/>
            <Instagram/>
            <p>
            Copyright ©️ 2021. All Rights Reserved.This is the official website of Goa Tourism Department, Govt of Goa.
            </p>
         

        </div>
      </footer>

    </div>
  );
}