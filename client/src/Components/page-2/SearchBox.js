import React from 'react';
import Cardlist from './Cardlist.js';
import cardsinput from './cardsinput';


const SearchBox = ({ searchChange }) => {

    return (
        <div className='pa2 '>
        
        <input 
        className='pa3 ba bg-lightest-blue'
        type = "text" 
        placeholder = "Search" 
        onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;