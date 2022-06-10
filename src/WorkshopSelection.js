import NavbarM from './assets/NavbarM.js';
import ContactUs from './assets/ContactUs';
import WorkshopCards from './assets/WorkshopCards';
import {Container} from 'react-bootstrap';
import classes from './styles/WorkshopSelection.module.scss';

function WorkshopSelection() {
  return (
    <div>
      <NavbarM></NavbarM>
      <Container>
        <header className = {classes.header}>
            <h2 className = {classes.header}> Workshops </h2>
        </header>
        <body>
            <div className = {classes.grid}>
                <WorkshopCards></WorkshopCards>
                <WorkshopCards></WorkshopCards>
            </div>
           
        </body>
      </Container>
      <br></br>
      <ContactUs></ContactUs>
    </div>
  );
}

export default WorkshopSelection;