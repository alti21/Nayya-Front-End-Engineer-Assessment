import React from 'react';
import { Col } from 'react-bootstrap';

const Navlink = ({children, width}) => (
    <Col xl={width}>{children}</Col>
)

export default Navlink