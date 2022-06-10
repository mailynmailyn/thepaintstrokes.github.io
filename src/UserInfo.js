import NavbarM from './assets/NavbarM.js';
import ContactUs from './assets/ContactUs';
import WorkshopCards from './assets/WorkshopCards';
import studioImage from './assets/studioimage.jpg';
import {Container, Button} from 'react-bootstrap';
import classes from './styles/UserInfo.module.scss';
import {Link} from 'react-router-dom';



function UserInfo() {
  return (
    <div>
      <NavbarM></NavbarM>
      <Container>
        <header className = {classes.header}>
            <h2> Registration for Workshop: Personal Information</h2>
            <h5> Please enter the following personal information. </h5>
        </header>
        <body className = {classes.body}>
            <form id = 'personal_info' action="/confirmation">
                <div>
                    <label for="name">Full Name:</label>
                <input type="text" id="fname" name="fname"></input>
                    </div>
                
                <br></br>

                <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"></input>
                </div>
                <br></br>

                <div>
                <label for="remail">Reconfirm Email:</label>
                <input type="email" id="remail" name="remail"></input>
                </div>
                <br></br>

                <div>
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone"></input>
                </div>

                <br></br>
                <Button as= {Link} to = "/confirmation"> Submit </Button>
            </form>
        </body>
      </Container>
      <br></br>
      <ContactUs></ContactUs>
    </div>
  );
}

export default UserInfo;