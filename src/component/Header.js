import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Fade } from 'react-slideshow-image';

import './Header.css'

const fadeImages = [
    {
      url: 'https://m.media-amazon.com/images/I/715F4V+STbL._SX3000_.jpg'
      
    },
    {
      url: 'https://m.media-amazon.com/images/I/61jLjFXfkrL._SX3000_.jpg'
    },
    {
      url: 'https://m.media-amazon.com/images/I/51O45Sl0WLL._SX3000_.jpg'
    },
  ];

function NavScrollExample() {

  return (
    <>
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand href="#"><img src='Amalogo.png' style={{width:'10em'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll 
          >
            <Nav.Link href="action1">Home</Nav.Link>
            <Nav.Link href="action2">Link</Nav.Link>
            <NavDropdown title="Language" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item href="#action4">Action</NavDropdown.Item> */}

              <input type='radio'></input>
              <label>Hindi</label><br></br>
              <input type='radio'></input>
              <label>English UK</label><br></br>
              <input type='radio'></input>
              <label>Urdu</label><br></br>
              <input type='radio'></input>
              <label>Marathi</label><br></br>
              {/* <NavDropdown.Item href="#action5">
                Another action
              </NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>

<div className='slider'>
  <div className='slideroverlay'></div>
    <div className="slide-container">
      <Fade className="fadee">
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img className='imgset' style={{ width: '100%' }} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>       
    </div>
  </>
  );
}

export default NavScrollExample;