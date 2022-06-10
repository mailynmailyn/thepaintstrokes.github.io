import NavbarM from './assets/NavbarM.js';
import ContactUs from './assets/ContactUs';
import {Container} from 'react-bootstrap';
import classes from './styles/Artists.module.scss';
import newAb from './assets/thenewabnormal.jpg';
import {CardGroup, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import albert from './assets/albert.webp';
import alex from './assets/alex.jpg';
import fab from './assets/fab.jpg';
import julian from './assets/julian.jpg';
import nick from './assets/nickvalensi.jpg';
import nikolai from './assets/nikolai.jpg';
import { findAllByTitle } from '@testing-library/react';


function Artists() {
  return (
    <div>
      <NavbarM></NavbarM>
        <header className = {classes.header}>
            <h2 className = {classes.header}> Meet Our Artists! </h2>
        </header>
        <body className = {classes.body}>
            <div className = {classes.grid}>
            <Card>
            <Card.Img className = {classes.card_img} variant="top" src= {albert}/>
            <Card.Body>
                <Card.Title> Albert Hammond Jr. </Card.Title>
                <hr></hr>
                <Card.Text>
                Specializes in pottery and watercolour.
                </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img className = {classes.card_img} variant="top" src= {alex} />
            <Card.Body>
                <Card.Title> Alex Turner </Card.Title>
                <hr></hr>
                <Card.Text>
                Specializes in photography.
                </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img className = {classes.card_img} variant="top" src= {fab} />
            <Card.Body>
                <Card.Title>Fabrizio Moretti</Card.Title>
                <hr></hr>
                <Card.Text>
                Specializes in abstract painting.
                </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img className = {classes.card_img} variant="top" src= {julian} />
            <Card.Body>
                <Card.Title> Julian Casablancas </Card.Title>
                <hr></hr>
                <Card.Text>
                Specializes in oil painting.
                </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img className = {classes.card_img} variant="top" src= {nick} />
            <Card.Body>
                <Card.Title> Nick Valensi </Card.Title>
                <hr></hr>
                <Card.Text>
                Specializes in pottery and acrylic painting. 
                </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img className = {classes.card_img} variant="top" src= {nikolai} />
            <Card.Body>
                <Card.Title>Nikolai Fraiture</Card.Title>
                <hr></hr>
                <Card.Text>
                Specializes in photography and pottery.
                </Card.Text>
            </Card.Body>
            </Card>
                
            </div>
           
        </body>
      <br></br>
      <ContactUs></ContactUs>
    </div>
  );
}

export default Artists;