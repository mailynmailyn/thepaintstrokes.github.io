import {CardGroup, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import oil from './oil.jpeg';
import classes from "./WorkshopCards.module.scss"
import water from "./watercolor.jpg";
import vincent from "./portrait.jpg";
import sun from "./sunflower.webp";
import pot from "./pottery.jpg";
import ottawa from "./ottawa.webp";


const WorkshopCards = () => {
    return <CardGroup>
        <CardGroup>    
            <Card>
            <Card.Img className = {classes.card_img} variant="top" src= {oil} />
            <Card.Body>
                <Card.Title className = {classes.price}>Intro to Oil Painting ~ $30</Card.Title>
                <Card.Text>
                Start learning one of the more challenging painting dominions with still lifes.
                </Card.Text>
                <Button as= {Link} to = "/date" className= {classes.button}> Register </Button>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img className = {classes.card_img} variant="top" src= {water} />
            <Card.Body>
                <Card.Title className = {classes.price}>Watercolor Landscape ~ $20</Card.Title>
                <Card.Text>
                Create a watercolor scene based on classic Canadian landscape.
                </Card.Text>
                <Button as= {Link} to = "/date" className= {classes.button}> Register </Button>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img className = {classes.card_img} variant="top" src={vincent} />
            <Card.Body>
                <Card.Title className = {classes.price}>Advanced Portrait Painting ~ $40</Card.Title>
                <Card.Text>
                Advanced painters have the oppourtunity to hone their realism portraiture painting.
                </Card.Text>
                <Button as= {Link} to = "/date" className= {classes.button}> Register </Button>
            </Card.Body>
            </Card>
        </CardGroup>
        <CardGroup>
        <Card>
            <Card.Img className = {classes.card_img} variant="top" src= {sun} />
            <Card.Body>
            <Card.Title className = {classes.price}>Sunflower Bowls ~ $15</Card.Title>
            <Card.Text>
                Sculpt a sunflower bowl for the summer!
            </Card.Text>
            <Button as= {Link} to = "/date" className= {classes.button}> Register </Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img className = {classes.card_img} variant="top" src={pot} />
            <Card.Body>
            <Card.Title className = {classes.price}>Intro to Pottery Wheel ~ $15</Card.Title>
            <Card.Text>
                Introductory class for the potter wheel. Create a basic bowl.
            </Card.Text>
            <Button as= {Link} to = "/date" className= {classes.button}> Register </Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img className = {classes.card_img} variant="top" src={ottawa} />
            <Card.Body>
            <Card.Title className = {classes.price}>Ottawa Nature Photography ~ $25</Card.Title>
            <Card.Text>
                Take some professional pictures of the beautiful capital!
            </Card.Text>
            <Button as= {Link} to = "/date" className= {classes.button}> Register </Button>
            </Card.Body>
        </Card>
        </CardGroup>
    </CardGroup>
};

export default WorkshopCards;