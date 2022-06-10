import NavbarM from './assets/NavbarM.js';
import ContactUs from './assets/ContactUs';
import WorkshopCards from './assets/WorkshopCards';
import studioImage from './assets/studioimage.jpg';
import {Container, Row, Col, Button} from 'react-bootstrap';
import classes from './styles/RegistrationDate.module.scss';

function RegistrationDate() {
  return (
    <div>
      <NavbarM></NavbarM>
      <Container>
        <header className = {classes.header}>
            <h2> Registration for Workshop </h2>
            <h5> Select an available date, timeslot and instructor. </h5>
        </header>
        <body className = {classes.body}>
                <form className = {classes.body__form}>
                    <Row>
                    <label for="date">Choose available date:</label>
                    <input type="date" id="date" name="date"></input>
                    </Row>
                    <br></br>
                    <Row>
                    <label for="timeslots">Choose an available timeslot:</label>
                    <select name="timeslots" id="timeslots">
                        <option value="1-3">1:00-3:00</option>
                        <option value="3-6">3:00-6:00</option>
                        <option value="3-6">3:00-6:00</option>
                        <option value="6-9">6:00-9:00</option>
                    </select>
                    </Row>

                    <br></br>
                    <Row>
                    <label for="artist">Choose an available Artist:</label>

                    <select name="artist" id="artist">
                        <option value="julian">Julian Casablancas</option>
                        <option value="fabrizio">Fabrizio Moretti</option>
                        <option value="alex">Alex Turner</option>
                        <option value="albert">Albert Hammond Jr.</option>
                        <option value="nick">Nick Valensi</option>
                        <option value="nikolai">Nikolai Fraiture</option>

                    </select>
                    </Row>
                    <br></br>
                    <Row>
                        <Button as= {Link} to = "/userinfo"> Submit </Button>
                    </Row>
                    </form>

        </body>
      </Container>
      <br></br>
      <ContactUs></ContactUs>
    </div>
  );
}

export default RegistrationDate;