// import './App.css';
// import NavbarM from './assets/NavbarM.js';
// import HomePage from './HomePage.js';
// import AboutUs from './AboutUs.js';
// import WorkshopSelection from './WorkshopSelection.js';
// import Artists from './Artists.js';
// import RegistrationDate from './RegistrationDate';
// import UserInfo from './UserInfo';
// import Confirmation from './Confirmation';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path= '/thepaintstrokes.github.io' element={<HomePage />} /> 
//         <Route path='/thepaintstrokes.github.io/homepage' element={<HomePage />} /> 
//         <Route path='/thepaintstrokes.github.io/aboutus' element={<AboutUs />} />
//         <Route path='/thepaintstrokes.github.io/workshopselect' element={<WorkshopSelection />} />
//         <Route path= '/thepaintstrokes.github.io/artists' element={<Artists />} />
//         <Route path= '/thepaintstrokes.github.io/date' element={<RegistrationDate />} />
//         <Route path= '/thepaintstrokes.github.io/userinfo' element={<UserInfo />} />
//         <Route path= '/thepaintstrokes.github.io/confirmation' element={<Confirmation />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;