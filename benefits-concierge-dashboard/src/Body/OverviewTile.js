import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'

const OverviewTile = () => {
    
    return (
        <>
            <div>
                <p className='overview-tile-title'>Medical</p>
            </div>
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
                <span className='right-width overview-tile-heading'>Remaining</span>
            </div>
            <div style={{marginTop: '8px', height: '14px'}}>
                <span style={{fontSize: '18px'}} className='left-width overview-tile-content'>$1265.24</span>
                <span style={{fontSize: '18px'}} className='right-width overview-tile-content'>$4984.76</span>
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
        </>
    )
}

export default OverviewTile;