import React from 'react';
import HeaderTile from './HeaderTile';
import Tile from './Tile';

const SpendingTiles = () => (
    <div style={{width: '782px', marginTop: '46px'}}>
        <HeaderTile 
            className='header-tile' 
            firstName='Jeff' 
            date='3/25/21'
            savingsAmount={557}
            lifetimeSavings={127}
        />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
    </div>
)

export default SpendingTiles;