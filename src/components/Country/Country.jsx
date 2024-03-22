import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    //console.log(country);
    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }

    //console.log(handleVisitedCountries);
    //console.log(handleVisitedFlags);

    return (
        <div className= {`country ${visited && 'visited'}`}>
            <h4 style={{color: visited? 'red': 'black'}}>Name: {name?.common}</h4>
            <img src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountries(country)}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add flag</button>
            <br />
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'Wanna visit'}
        </div>
    );
};

export default Country;