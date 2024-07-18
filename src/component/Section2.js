import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Section2.css";

function Section2() {
  return (
    <Container fluid className="winner">
      <Row>
        <Col><h1>The Winner is</h1></Col>
      </Row>
    </Container>
  );
}

export default Section2;