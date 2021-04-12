import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OverviewTile from './OverviewTile';

const SpendingOverview = () => (
    <Container className='overview'>
        <Row>
            <Col lg={12}>
                <p className='overview-title'>My Spending Overview</p>
            </Col>
        </Row>
        <OverviewTile />
            
        
    </Container>
)

export default SpendingOverview;