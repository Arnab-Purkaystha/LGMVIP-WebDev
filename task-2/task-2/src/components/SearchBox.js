import React from 'react';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input 
                className='pa3 ba b--white bg-white
                '
                 type="search" 
                 placeholder='Search here' 
                 onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;
