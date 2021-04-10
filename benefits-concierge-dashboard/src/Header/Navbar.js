import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Navbar = ({children, className}) => (
    <Container>
        <Row className={className}>
            {children}
        </Row>
    </Container>
)

export default Navbar;