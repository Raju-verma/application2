import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../component/Footer';
function Signup(){
    return(
        <>
        <h1>Log in or Create Your Account</h1>
        <Container fluid>
      <Row align="center">
        <Col><label for="email">Email</label>
        <input type="text" id="email" placeholder="enter email address"></input><br></br>
        <label for="password">Password</label>
        <input type="text" id="password" placeholder="enter your password"></input><br></br>
        <button type="submit">Click here</button>
        <br></br></Col>
      </Row>
    </Container>
       <Footer/> 
        </>
    );
}
export default Signup;