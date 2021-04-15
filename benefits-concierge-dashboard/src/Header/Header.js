import React from 'react';
import Navbar from './Navbar'
import Logo from './Logo'
import Navlink from './Navlink'
import Notification from '../images/notification.svg'
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => (

    <div className='bg-blue'>
        <Container className='App-header bg-blue'>
            <Row>
                <Col  lg={2} className="px-0">
                    <Logo logoClass='bcd-logo' titleClass='navlink'/>
                </Col>
                <Col lg={4}>
                    <Navbar className='navbar p-0 pr-2'>
                        <Navlink >
                            <a href="#" className='navlink' style={{width: 62}}>Pharmacy<br></br>Savings</a>
                        </Navlink>
                        <Navlink>
                            <a href="#" className='navlink' style={{width: 88}}>Claim<br></br>Opportunities</a>
                        </Navlink>
                        <Navlink>
                            <a href="#" className='navlink' style={{width: 73}}>Find Care<br></br>In-Network</a>
                        </Navlink>
                    </Navbar>
                </Col>
                <Col lg={4} className='ml-auto'>
                    <Navbar className='align-items-center'>
                        <Navlink width={2}>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="View my Cards and Plans"><img src={Notification} alt=""></img></a>
                        </Navlink>
                        <Navlink>
                            <a href="#" className='user-name'><span>j</span> <span>Caravel Autism Health</span></a>
                        </Navlink>
                    </Navbar>
                </Col>
            </Row>
            
            
            
        </Container>
    </div>

)

export default Header;