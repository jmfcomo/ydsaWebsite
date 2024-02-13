// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ImageCarousel />
      <Events />
      <Footer />
    </div>
  );
}


function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Mizzou YDSA </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#safe-haven">Safe Haven Campaign</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}


function ImageCarousel() {
  return (
    <Carousel className="mx-auto" style={{ maxWidth: '800px' }}>
      <CarouselItem>
        <img className="d-block w-100" src="/bodilyAutonomyProtest.jpg" alt="Community members gather at Mizzou's Speaker's Circle to fight for Bodily Autonomy"/>
        <Carousel.Caption className="text-center">
          <p>Community members gather at Mizzou's Speaker's Circle to fight for Bodily Autonomy</p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img className="d-block w-100" src="/climateRally.jpg" alt="Community members gather at Mizzou's Speaker's Circle to fight for divesting from fossil fuels"/>
        <Carousel.Caption>
          <p>Community members gather at Mizzou's Speaker's Circle to fight for divesting from fossil fuels</p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img className="d-block w-100" src="/transRightsTabling.jpg" alt="Mizzou YDSA members table in Speaker's Circle seeking signatures for a petition to raise minimum wage"/>
        <Carousel.Caption>
          <p>Mizzou YDSA members table in Speaker's Circle seeking signatures for a petition to raise minimum wage</p>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  )
}


function Events() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/transRightsTabling.jpg" />
        <Card.Body>
          <Card.Title>Tabling</Card.Title>
          <Card.Text>
            Tabling in Speaker's Circle 10am - 2pm, Tuesday, February 12
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/generalBody.png" />
        <Card.Body>
          <Card.Title>General Body Meeting</Card.Title>
          <Card.Text>
            General Body Meeting 6-7pm on Wednesday, February 14, in LeFevre 106.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="cityCouncil.png" />
        <Card.Body>
          <Card.Title>Safe Haven City Council Meeting</Card.Title>
          <Card.Text>
            Support the Safe Haven Ordinance as City Council votes on Monday, February 19 at 7pm at City Hall.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
}

function Footer() {
  return (
    <footer className="bg-dark text-light text-center p-3">
    <div className="container">
      <p><em>The only thing to lose is your chains</em></p>
    </div>
  </footer>
  )
}

export default App;
