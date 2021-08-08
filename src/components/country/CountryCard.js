import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {

 const { name, population, region, capital, flag ,alpha3Code} = country;

 const formatNumber = (num)=>{
    return new Intl.NumberFormat().format(num);
 }

 return (
    <Link className="homepage__card" to={`/country/${alpha3Code}`} >
    <div>
       <img src={flag} alt={`${name}-flag`} />
        <h4>{name}</h4>
        <p> <span>Population:</span>  {formatNumber(population)}</p>
        <p> <span>Region:</span>  {region}</p>
       <p> <span>Capital:</span>  {capital}</p>
    </div>
   </Link>
 )
}

export default CountryCard;
