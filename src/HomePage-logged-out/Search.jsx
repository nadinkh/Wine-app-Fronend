import React from 'react';
import {Link} from 'react-router-dom';

const Search = () => {



    return (

        <div className="search-container" >
            <Link to="/"><button >Go home</button></Link>
            <form className="search-form-container">

                <input className="search-input" type="search" id="mySearch" />
                <button className="search-btn">Search</button>

            </form>
        </div >



    )
}

export default Search