import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Section1.css";

function Section1() {
  return (
    <>
    <Container fluid>
      <Row>
        <Col>
          <h1>ICC WORLD CUP</h1>
          <p>The Cricket World Cup (officially known as ICC Men's Cricket World Cup)[3] is the international championship of One Day International (ODI) cricket. The event is organised by the sport's governing body, the International Cricket Council (ICC), every four years, with preliminary qualification rounds leading up to a finals tournament. The tournament is one of the world's most viewed sporting events and considered as the "flagship event of the international cricket calendar" by the ICC.[4] It is widely considered the pinnacle championship of the sport of cricket.

The first World Cup was organised in England in June 1975, with the first ODI cricket match having been played only four years earlier. However, a separate Women's Cricket World Cup had been held two years before the first men's tournament, and a tournament involving multiple international teams had been held as early as 1912, when a triangular tournament of Test matches was played between Australia, England and South Africa. The first three World Cups were held in England. From the 1987 tournament onwards, hosting has been shared between countries under an unofficial rotation system, with fourteen ICC members having hosted at least one match in the tournament.</p>
        </Col>
        <Col className="event">
          <h1>OPENING CERMONEY</h1>
          <img src="https://i.ytimg.com/vi/2qTViaRY_ew/maxresdefault.jpg"></img>
        </Col>
      </Row>
      </Container>
      </>
  );
} 
export default Section1;