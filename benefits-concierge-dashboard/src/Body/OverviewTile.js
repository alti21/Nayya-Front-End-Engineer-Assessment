import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import ProgressBar from 'react-bootstrap/ProgressBar'

const OverviewTile = ({title, children}) => {
    
    return (
        <>
            <hr className='hr'></hr>
            <div>
                <p className='overview-tile-title'>{title}</p>
            </div>
            {children}
        </>
    )
}

export default OverviewTile;