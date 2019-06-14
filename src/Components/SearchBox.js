import React from 'react';


const SearchBox = ({ searchChange}) => {
    return(
        <div className="pa2">
            <input  onChange={searchChange} className="" type="search" name="" id=""/>
        </div>
    );
  
}

export default SearchBox;
