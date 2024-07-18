import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Section.css";
function Section(){
    return(
      <>
      <Container fluid>
        <Row className="left">
            <Col><img src="https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fmedia%2Fattachments%2F1719689831069_Team-India.jpeg&w=1200&q=75"></img></Col>
            <Col><img src="https://th-i.thgim.com/public/sport/cricket/75xg9n/article68351328.ece/alternates/LANDSCAPE_1200/01VRTROht.jpg"></img></Col>
        </Row>
      </Container>
      </>
    );
}
export default Section;