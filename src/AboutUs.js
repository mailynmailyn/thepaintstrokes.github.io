import NavbarM from './assets/NavbarM.js';
import ContactUs from './assets/ContactUs';
import {Container} from 'react-bootstrap';
import thestrokes from './assets/thestrokes.jpg';
import classes from './styles/AboutUs.module.scss'

function AboutUs() {
  return (
    <div>
      <NavbarM></NavbarM>
      <Container>
          <header className = {classes.header}>
            <h2 className = {classes.header__title}>About Us</h2> 
            <img className = {classes.img} src = {thestrokes}></img>              
          </header>
          <body className = {classes.body}>
              <h3>Our Origins</h3>
              <p> The Paint Strokes was founded collectively by five of our current artist in 2001. Julian, Nick, Nikolai, Albert and Fab met in art school in New York and 
                after finding a common passion to bring art to the public, the studio was born. In 2004, Alex joined and The Paint Strokes have been running art workshops for 
                the community ever since. 
              </p>
              <h3>Covid-19 Protocols</h3>
              <p> We ask that customers show valid vaccine passport and wear a mask at all times during workshops.</p>
          </body>

      </Container>
      <ContactUs></ContactUs>
    </div>
  );
}

export default AboutUs;