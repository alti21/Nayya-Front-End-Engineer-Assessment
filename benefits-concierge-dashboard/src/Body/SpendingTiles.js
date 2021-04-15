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
        <Tile 
            amountHeading='Save up to'
            amount={`$${123}`}
            firstName='Jeff'
            info={[<span className='orange'>per year</span>, ' on your Tier I prescription drug Promethazine if you go to an alternate pharmacy nearby.']}
            time={`${2} min`}
            action='Save now ($)'
        />
        <Tile 
            amountHeading='Save up to'
            amount={`$${247}`}
            firstName='Anna'
            info={['by submitting your ',<span className='blue'>urgent care claim</span>, ' dated October 27, 2020 to Guardian.']}
            time={`${9} min`}
            action='Save now ($)'
        />
        <Tile 
            amountHeading='Save up to'
            amount={`$${123}`}
            firstName='David'
            info={[<span className='red'>per visit</span>, ' by changing to an in-network doctor for your recurring podiatry visits.']}
            time={`${23} min`}
            action='Save now ($)'
        />
        <Tile 
            amountHeading='Dental cleanings'
            amount={`${2}/yr`}
            firstName='Jeff'
            info={['Schedule your ',<span className='red'>covered semi-annual dental cleaning</span>, ' with a dentist nearest you. Its not too late.']}
            time='David'
            action='Find dentist'
        />
        <Tile 
            amountHeading='Save up to'
            amount={`$${23}`}
            firstName='Jeff'
            info={[<span className='orange'>per fill</span>, ' on your Tier I prescription drug Foradil if you go to an alternate pharmacy nearby.']}
            time={`${3} days`}
            action='Save now ($)'
        />
    </div>
)

export default SpendingTiles;