import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrimarySearchAppBar from './Components/AppBarSearch';
import Homepage1 from './Pages/Homepage1';
import Statistics2 from './Pages/Statistics2';
import Etourist3 from './Pages/Etourist3';
import Arrivals4 from './Pages/Arrivals4';
import ContactUs from './Components/Homepage/ContactUs';
import SimpleAccordion from './Components/Homepage/Languages';
import AppFooter from './Components/Homepage/Footer';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
        <ContactUs/>
        <SimpleAccordion/>
     <PrimarySearchAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Homepage1/> </Route>
            <Route path={process.env.PUBLIC_URL + '/homepage1'}  > <Homepage1/> </Route>
            <Route path={process.env.PUBLIC_URL + '/Statistics2'}  > <Statistics2/> </Route>
            <Route path={process.env.PUBLIC_URL + '/etourist3'}  > <Etourist3/> </Route>
            <Route path={process.env.PUBLIC_URL + '/arrivals4'}  > <Arrivals4/> </Route>

          </Switch>
          <AppFooter/>

    </div>
  );
  }

export default App;
