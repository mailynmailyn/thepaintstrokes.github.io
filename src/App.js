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
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path= '/' element={<HomePage />} /> 
        <Route path='/homepage' element={<HomePage />} /> 
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/workshopselect' element={<WorkshopSelection />} />
        <Route path= '/artists' element={<Artists />} />
        <Route path= '/date' element={<RegistrationDate />} />
        <Route path= '/userinfo' element={<UserInfo />} />
        <Route path= '/confirmation' element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
