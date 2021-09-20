import React from 'react';
import './Country.css'

const Country = (props) => {
    const{name,capital,population,region,flag}=props.country;
    return (
        <div className="country-details">
            <h2>This is {name}</h2>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <img className="country-image" src={flag} alt="" />
        </div>
    );
};

export default Country;