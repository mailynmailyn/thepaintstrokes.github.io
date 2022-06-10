import NavbarM from './assets/NavbarM.js';
import ContactUs from './assets/ContactUs';
import WorkshopCards from './assets/WorkshopCards';
import studioImage from './assets/studioimage.jpg';
import {Container} from 'react-bootstrap';
import classes from './styles/HomePage.module.scss';

function HomePage() {
  return (
    <div>
      <NavbarM></NavbarM>
      <Container>
        <header className = {classes.header}>
            <h3> Welcome to the Studio! Come make some art! </h3>
            <img src = {studioImage}></img>
        </header>
        <body className = {classes.body}>
            <div>
                <h2 className = {classes.body__title}>June Workshops</h2>
            </div>
            <div>
                <WorkshopCards></WorkshopCards>
            </div>
        </body>
      </Container>
      <br></br>
      <ContactUs></ContactUs>
    </div>
  );
}

export default HomePage;