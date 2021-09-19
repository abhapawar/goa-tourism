import React from 'react';
import Container from '@material-ui/core/Container'
import SwipeableTextMobileStepper from '../Components/Homepage/Stepper1';
import TextMobileStepper from '../Components/Homepage/Stepper2';
import Latest1 from '../Components/Homepage/Latest1';
import Latest2 from '../Components/Homepage/Latest2';
import Latest3 from '../Components/Homepage/Latest3';
import ReadMore from '../Components/Homepage/ReadMore';
import Department from '../Assets/Department.png';
import GoaLogo from '../Assets/GoaLogo.png';
import Video from '../Assets/Video.jpg';

export default function Goahomepage() {
  return (
    <React.Fragment>
        <Container fixed>
        <img src = {GoaLogo} className= "Government of Goa" alt= "Government of Goa"/>

          <p>
            Department of Tourism Goa
            </p>
            <p>
            Government of Goa
            </p>
          <SwipeableTextMobileStepper/>
          <p>
            Welcome to Goa Tourism Department
            </p>
            <img src = {Department} className= "Department of Goa" alt= "Department of Goa"/>

          <p>
          The Administrative head of the Department is Shri J. Ashok Kumar, IAS, Secretary Tourism. The Department has a zonal office in North Goa at Headquarters, Panaji and in South Goa at Margao.
          The Current Director of Tourism is Shri Menino D’souza.
          The Public Grievances Officer is Dy. Director (Administration).
          The Tourist Information Centres/Counters are located within the State and in Mumbai (temporarily closed). The Zonal Officers are primarily responsible for monitoring the Registration of Tourist Trade under the Tourist Trade Act, 1982.
          </p>
          <ReadMore/>
          <p>
            Travel Essentials
            </p>
          <TextMobileStepper/>
          <Latest1/>
          <Latest2/>
          <Latest3/>
          <p>
            A Glimpse into the Beauty of Goa
            </p>
            <img src = {Video} className= "Beauty of Goa" alt= "Beauty of Goa"/>

            
        </Container>
    </React.Fragment>
  );
}