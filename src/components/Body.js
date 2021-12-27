import React from 'react';
import './Body.css';
import Main from './Main';
import Navigation from './Navigation';

function Body(props) {
    return (
        <div>
            <Navigation/>
            <Main/>
           
        </div>
    );
}

export default Body;