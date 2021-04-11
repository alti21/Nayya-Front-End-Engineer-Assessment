import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
<div className='bcd-footer'>
    <Container >
        <Row className='justify-content-center'>
            <Col  xl={8} className='bcd-footer-box'>
                <span className='bcd-footer-item'>© Nayya Health, Inc. All rights reserved.</span>
                <span className='bcd-footer-item'>Privacy Policy</span>
                <span className='bcd-footer-item'>GDPR Notice</span>
                <span className='bcd-footer-item'>Licenses</span>
            </Col>
        </Row>
    </Container>
</div>
    
)

export default Footer;






