import React, { useEffect, useState } from 'react';
import Search from './search/Search';
import { getCountry, getcountryData } from '../helpers/api';
import CountryCard from './country/CountryCard';

const HomeScreen = () => {
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  const [region, setRegion] = useState("all");

  const getCountriesRegion = async(region) => {
    try {
      setLoading(true);
      const {data} = await getcountryData(`https://restcountries.eu/rest/v2/region/${region}`);
      setCountries(data);
      setLoading(false);
      setNotFound(false);
    } catch (err) {
      console.log(err);
      setNotFound(true);
    }
  };

  const getCountries = async() => {
    try {
      setLoading(true);
      const {data} = await getcountryData("https://restcountries.eu/rest/v2/all");
      setCountries(data);
      setLoading(false);
      setNotFound(false);
    } catch (err) {
      console.log(err);
      setNotFound(true);
    }
  };

  useEffect(() => {
    if(!searching){
      if(region === "all"){
        getCountries();
      }
      else{
        console.log(region)
        getCountriesRegion(region);

      }
    }
  }, [region, searching]);


  const onSearch = async (country) => {
    if (!country) {
      setSearching(false);
      return
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const {data} = await getCountry(country);
    if (!data) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setCountries(data);
    }
    setLoading(false);
  };

 return (
  <div className="homepage__container">
      <Search onSearch={onSearch} selectOptions={setRegion} />
      <div className="homepage__cards-container">
        { loading 
        ? ( <div className="loading__homepage">
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>)
        : (
          countries.map(country => <CountryCard key={country.alpha2Code} country={country} />)
        )
        }
      </div>    
  </div>
 )
}

export default HomeScreen;
