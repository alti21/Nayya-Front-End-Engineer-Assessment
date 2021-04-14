import React from 'react';
import SpendingTiles from './SpendingTiles';
import SpendingOverview from './SpendingOverview';
import { Container, Row, Col } from 'react-bootstrap';

const Body = () => (
    <Container>
        <Row>
            <Col lg={8}>
                <SpendingTiles />
            </Col>
            <Col lg={4}>
                <SpendingOverview />
            </Col>
        </Row>
    </Container>
) 

export default Body