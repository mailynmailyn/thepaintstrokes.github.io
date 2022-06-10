import NavbarM from './assets/NavbarM.js';
import ContactUs from './assets/ContactUs';
import WorkshopCards from './assets/WorkshopCards';
import studioImage from './assets/studioimage.jpg';
import {Container, Table} from 'react-bootstrap';
import classes from './styles/Confirmation.module.scss';


function Confirmation() {
  return (
    <div>
      <NavbarM></NavbarM>
      <Container>
        <header className = {classes.header}>
            <h2> Registration Confirmation </h2>
            <h5> Congratulations! You have successfully registered for your workshop of choice. 
                Expect a confirmation email within the next 3 minutes. If there are any issues, do not hesitate to contact us. See you soon! </h5>
        </header>
        <body className = {classes.body}>
            <h4 className = {classes.body}> Summary of Registration </h4>
            <table className = {classes.table}>
            <tr>
            <th>Workshop</th>
            <td>Oil Painting</td>
        </tr>
        <tr>
            <th>Date</th>
            <td>20-06-2022</td>
        </tr>
        <tr>
            <th>Time</th>  
            <td>3:00-6:00</td>
        </tr>
        <tr>
            <th>Instructor</th>  
            <td>Julian Casablancas</td>
        </tr>
            </table>
        </body>
      </Container>
      <br></br>
      <ContactUs></ContactUs>
    </div>
  );
}

export default Confirmation;