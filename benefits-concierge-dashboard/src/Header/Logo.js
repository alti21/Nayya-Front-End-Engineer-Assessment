import React from 'react';
import Favicon from '../images/Favicon.svg'
import { Container, Row, Col } from 'react-bootstrap';

const Logo = ({logoClass, titleClass}) => (
    <Container>
        <Row className='align-items-center'>
            <Col xl={3} className='px-0'><a href="#"><img src={Favicon} alt="Nayya"></img></a></Col>
            <Col xl={5} className='px-0'><a href="#" className={titleClass}>My Benefits<br></br>Concierge</a></Col>
        </Row>
    </Container>
)

export default Logo;
/*
<div className='d-flex-row align-items-center'>
        <div className={logoClass}>
            <a href="#"><img src={Favicon} alt="Nayya"></img></a>
        </div>
        <div className={titleClass}>
            <a href="#">My Benefits<br></br>Concierge</a>
        </div>
    </div>
  */  