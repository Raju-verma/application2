import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Footer.css";
function Footer(){
    return(
        <>
    <Container fluid className="bru">
      <Row>
        <Col>
        <h2>ICC</h2>
        <p>Official ICC Cricket website - live matches, scores, news, highlights, commentary, rankings, videos and fixtures from the International Cricket Council.</p>
        </Col>
        <Col><h2>About ICC</h2>
       <p>HOME</p>
       <p>ABOUT</p>
       <p>FAQ</p>
       </Col>
        <Col>
        <h2>ICC Service</h2>
        <p>+91-8909910910 , 8771000010</p>
        <p>Service@ICC.in</p>
        <p>help@icc.in</p></Col>
        <Col><h2>SOCIAL MEDIA</h2>
        <p>Facebook<img src=""></img></p>
        <p>Instagram</p>
        <p>Twitter</p></Col>

        </Row>
        </Container>
        </>
    )
}
export default Footer;