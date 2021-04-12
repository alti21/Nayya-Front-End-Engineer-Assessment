import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OverviewTile from './OverviewTile';
import ProgressBar from 'react-bootstrap/ProgressBar'

const SpendingOverview = () => (
    <Container className='overview'>
        <Row>
            <Col lg={12}>
                <p className='overview-title'>My Spending Overview</p>
            </Col>
            
        </Row>
        
        <OverviewTile title="Medical">
            <div style={{height: '14px'}}>
                <span className='left-width overview-tile-heading'>Total Deductible (i)</span>
                <span className='right-width overview-tile-heading'>Deadline</span>
            </div>
            <div style={{height: '13px'}}>
                <span className='left-width overview-tile-content'>$6250</span>
                <span className='right-width overview-tile-content'>12/04/2021</span>
            </div>
            <div style={{marginTop: '22px', height: '11px'}}>
                <span className='left-width overview-tile-heading'>Total Spent of $6250</span>
                <span className='right-width overview-tile-heading text-right'>Remaining</span>
            </div>
            <div style={{marginTop: '8px', height: '14px'}}>
                <span style={{fontSize: '18px'}} className='left-width overview-tile-content'>$1265.24</span>
                <span style={{fontSize: '18px'}} className='right-width overview-tile-content text-right'>$4984.76</span>
            </div>
            <div >
                <ProgressBar now={20} className='bcd-bar'/>
            </div>
            <div className='overview-tile-text'>
                You <strong>have not</strong> reached the deductible or out-of-pocket maximum
            </div>
            <div className='overview-tile-link'>
                <a href='#'>View my medical plan</a>
            </div>
        </OverviewTile>
        <OverviewTile title='Pharmacy'>
            <div style={{height: '28px'}}>
                <span className='left-width overview-tile-heading'>Total spent on perscriptions</span>
                <span className='right-width overview-tile-heading'>Total Active prescriptions</span>
            </div>
            <div style={{height: '20px', marginTop: '11px'}}>
                <span style={{fontSize: '18px'}} className='left-width overview-tile-content'>$68.92</span>
                <span style={{fontSize: '18px'}} className='right-width overview-tile-content'>5</span>
            </div>
            <div className='overview-tile-link'>
                <a href='#'>Find more affordable prescriptions</a>
            </div>
        </OverviewTile>
        <OverviewTile title="Dental">
            <div style={{height: '14px'}}>
                <span className='left-width overview-tile-heading'>Annual Benefit Limit (i)</span>
                <span className='right-width overview-tile-heading'>Deductible (i)</span>
            </div>
            <div style={{height: '13px'}}>
                <span className='left-width overview-tile-content'>$2500</span>
                <span className='right-width overview-tile-content'>$40 per person</span>
            </div>
            <div style={{marginTop: '22px', height: '11px'}}>
                <span className='left-width overview-tile-heading'>Total Spent of $2500</span>
                <span className='right-width overview-tile-heading'>Remaining</span>
            </div>
            <div style={{marginTop: '8px', height: '14px'}}>
                <span style={{fontSize: '18px'}} className='left-width overview-tile-content'>$40.57</span>
                <span style={{fontSize: '18px'}} className='right-width overview-tile-content'>$2459.43</span>
            </div>
            <div>
                <ProgressBar now={10} className='bcd-bar'/>
            </div>
            <div className='overview-tile-text'>
                You <strong>have not</strong> reached the max benefit
            </div>
        </OverviewTile>
        <hr style={{margin: '0px'}}></hr>
        <div className='overview-tile-link' style={{marginTop: '17px', marginBottom: '26px'}}>
            <a href='#'>View my cards and plans</a>
        </div>
    </Container>
)

export default SpendingOverview;