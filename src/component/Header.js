import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";


function Selection(){
  return (
<>
<Container fluid>
  <Row>
    <Col>
<Navbar className="draw">
<Container>
  <Navbar.Brand href="#home"><h1>ICC WORLD CUP 2024</h1></Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#home"><h3>Home</h3></Nav.Link>
    <Nav.Link href="Contact"><h3>Contact</h3></Nav.Link>
    <Nav.Link href="Signup"><h3>Signup</h3></Nav.Link>
  </Nav>
</Container>
</Navbar>
</Col>
  </Row>
</Container>
</>
  );
}
export default Selection;