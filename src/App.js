import './App.css';
import NavbarM from './assets/NavbarM.js';
import HomePage from './HomePage.js';
import AboutUs from './AboutUs.js';
import WorkshopSelection from './WorkshopSelection.js';
import Artists from './Artists.js';
import RegistrationDate from './RegistrationDate';
import UserInfo from './UserInfo';
import Confirmation from './Confirmation';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path= '/thepaintstrokes.github.io' element={<HomePage />} />  */}
        <Route path='/thepaintstrokes.github.io/homepage' element={<HomePage />} /> 
        <Route path='/thepaintstrokes.github.io/aboutus' element={<AboutUs />} />
        <Route path='/thepaintstrokes.github.io/workshopselect' element={<WorkshopSelection />} />
        <Route path= '/thepaintstrokes.github.io/artists' element={<Artists />} />
        <Route path= '/thepaintstrokes.github.io/date' element={<RegistrationDate />} />
        <Route path= '/thepaintstrokes.github.io/userinfo' element={<UserInfo />} />
        <Route path= '/thepaintstrokes.github.io/confirmation' element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
