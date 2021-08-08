import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { searchCountry } from "../../helpers/api";

const CountryScreen = ({ history }) => {
  const { countryCode } = useParams();
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const getCountry = async (code) => {
      setLoading(true);
      const { data } = await searchCountry(code);
      setCountry(data);
      setLoading(false);
    };
    getCountry(countryCode);
  }, [countryCode]);

  const handleReturn = ()=>{
    if(history.length <= 2){
      history.push("/");
    }else{
      history.goBack();
    }
    
  }

  return (
    <div className="countryscreen__container">
      <button className="countryscreen__btn" onClick={handleReturn} ><i className="fas fa-long-arrow-alt-left"></i>back </button>
      {!loading ? (
          <div className="countryscreen__body-img-text">
            <div className="countryscreen__img-container">
              <img src={country.flag} alt="asd" />
            </div>
            <div className="countryscreen__text-container">
              <div className="countryscreen__country-info">
                <h2>{country.name}</h2>
                <div className="countryscreen__country-p">
                  <p>
                    <span>Native Name: </span>
                    {country.nativeName}
                  </p>
                  <p>
                    <span>Population: </span>
                    {new Intl.NumberFormat().format(country.population)}
                  </p>
                  <p>
                    <span>Region: </span>
                    {country.region}
                  </p>
                  <p>
                    <span>Sub Region: </span>
                    {country.subregion}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {country.capital}
                  </p>
                  <p>
                    <span>Top Level Domain: </span>
                    {country.topLevelDomain}
                  </p>
                  <p>
                    <span>Currencies: </span>
                    {country.currencies[0].name}
                  </p>
                  <p>
                    <span>Lenguages: </span>
                    {country.languages.map((len) => `${len.name}, `)}
                  </p>
                </div>
              </div>
              <div className="countryscreen__country-border"><span>Border Countries: </span><div className="countryscreen__links"> {country.borders.map(border =>(
                 <Link key={border} className="countryscreen__link-border" to={`/country/${border}`} > {border}</Link>
              ))}</div></div>
            </div>
          </div>
      ) : (
        <div className="loading__country-screen">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      )}
    </div>
  );
};
export default CountryScreen;
