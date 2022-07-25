import React from "react";

const SearchBox = ({ searchChange}) => {
    return(
        <div className="pa2">
            <input
             className="pa3 ba b--blue bg-lightest-blue br3"
             type = 'search'
             placeholder='Search here'
             onChange={searchChange} 
              /> 
        </div>
    );
}

export default SearchBox;