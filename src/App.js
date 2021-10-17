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
import SimpleMenu01 from './Components/Homepage/Languages';

function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
        <Grid container spacing={1}>
          <Grid item xl={6} xs={6}>
            <ContactUs />
          </Grid>
          <Grid item xl={6} xs={6}>
            <SimpleMenu01 />
          </Grid>
        </Grid>
        <PrimarySearchAppBar />
      </header>

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
