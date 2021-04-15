import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Tile = ({amountHeading, amount, firstName, info, time, action}) => (
    <Container>
        <Row className='tile-row'>
            <Col className='tile-icon' lg={1}>
                <i>(i)</i>
            </Col>
            <Col lg={2}>
                <div className='tile-heading'>{amountHeading}</div>
                <span className='tile-amount'>{amount}</span>
            </Col>
            <Col lg={6}>
                <div className='tile-firstName'>{firstName}</div>
                <span className='tile-info'>{info}</span>
            </Col>
            <Col>
                <div className='time'>{time}</div>
                <button className='tile-action'>{action}</button>
            </Col>
        </Row>
    </Container>
)

export default Tile;