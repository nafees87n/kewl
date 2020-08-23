import React from 'react';
import SimpleCard from './card';
import './two.css';

const Cardlist = ( {cardsinput} ) => {

    const cardComponent = cardsinput.map((user,i) => {
    return <SimpleCard headline={cardsinput[i].headline} />
    })
    return (
        <div className='cardcontent'>
            {cardComponent}
        </div>
    ) 
}

export default Cardlist;