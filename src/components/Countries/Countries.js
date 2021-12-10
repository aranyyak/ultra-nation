import React from 'react';
import './Countries.css';

const Countries = (props) => {
    const {name, capital, region, flag} = props.countries;
    return (
        <div className='main'>
            <h1>Country Name: {name}</h1>
            <h2>Capital: {capital}</h2>
            <h2>Region: {region}</h2>
            <img id="image" src={flag} alt="" />
            <button>Add country</button>
        </div>
    );
};

export default Countries;
