import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../styles/ContactUs.module.scss';

const ContactUs = () => {
    return <div className = {classes.mainfooter}>
        <Container>
            <h3 className = {classes.mainfooter__title}>Contact Us</h3>
            <br></br>
            <Row>
                <Col> 
                <h4> Address </h4>
                <ul className = 'list-unstyled'>
                    <li>
                        333 Kepler Avenue,
                    </li>
                    <li>
                        Ottawa, Ontario
                    </li>
                    <li>
                        Canada
                    </li>
                </ul> 
                </Col>
                <Col>
                <h4> Telephone </h4>
                <ul className = 'list-unstyled'>
                    <li>
                        333-333-3333
                    </li>
                </ul> 
                </Col>
                <Col>
                <h4> Hours </h4>
                <ul className = 'list-unstyled'>
                    <li>
                        1:00-6:00 - Monday to Friday
                    </li>
                    <li>
                        3:00-9:00 - Saturday and Sunday
                    </li>
                </ul>  </Col>
            </Row>
        <br></br>
        </Container>
    </div>
};

export default ContactUs;