import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrimarySearchAppBar from './Components/AppBarSearch';
import Homepage1 from './Pages/Homepage1';
import Statistics2 from './Pages/Statistics2';
import Etourist3 from './Pages/Etourist3';
import Arrivals4 from './Pages/Arrivals4';
import ContactUs from './Components/Homepage/ContactUs';
import AppFooter from './Components/Homepage/Footer';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import SimpleMenu01 from './Components/Homepage/Languages';
import Header from './Components/Header';
import BasicButtonGroup from './Components/Homepage/DesktopMenu';

function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
        <Grid container spacing={1}>
          <Grid item xl={11} xs={9}>
            <ContactUs />
          </Grid>
          <Grid item xl={1} xs={3}>
            <SimpleMenu01 />
          </Grid>
        </Grid>
      </header>
      <Hidden smUp> <Grid item xs={12}>

        <PrimarySearchAppBar />
      </Grid> </Hidden>
      <Hidden mdDown> <Grid item lg={12}>
        <Header />
      </Grid> </Hidden>
      <Hidden mdDown> <Grid item lg={12}>
        <BasicButtonGroup />
      </Grid> </Hidden>

      {/* Router - Pages */}
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact > <Homepage1 /> </Route>
        <Route path={process.env.PUBLIC_URL + '/homepage1'}  > <Homepage1 /> </Route>
        <Route path={process.env.PUBLIC_URL + '/Statistics2'}  > <Statistics2 /> </Route>
        <Route path={process.env.PUBLIC_URL + '/etourist3'}  > <Etourist3 /> </Route>
        <Route path={process.env.PUBLIC_URL + '/arrivals4'}  > <Arrivals4 /> </Route>

      </Switch>
      <AppFooter />

    </div>
  );
}

export default App;
