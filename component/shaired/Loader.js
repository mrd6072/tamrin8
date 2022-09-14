import React from 'react';


//Gif
import spinner from '../../gif/spinner.gif'
const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="Loading" style={{width: "100%", textAlign: "center"}}/>
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;