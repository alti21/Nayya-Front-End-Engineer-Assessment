import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HeaderTile = ({className, firstName, date, savingsAmount, lifetimeSavings}) => (
    <Container className={className}>
        <Row className='header-row'>
            <Col className='header-tile-name'>
                <div className='welcome'>Welcome,</div>
                <div className='first-name'>{firstName}</div>
                <div className='date'>Member since {date}</div>
            </Col>
            <Col>
                <div className='savings-title'>Today's Potential Savings</div>
                <div className='savings-amount'>${savingsAmount}</div>
            </Col>
            <Col>
                <div className='savings-title'>Your Lifetime Savings</div>
                <div className='savings-amount'>${lifetimeSavings}</div>
            </Col>
            <Col>
                <div className='action'>The more actions you complete from the notifications below, the more you save!</div>
            </Col>
            <div className='gear-icon'>(i)</div>
        </Row>
    </Container>
)

export default HeaderTile;