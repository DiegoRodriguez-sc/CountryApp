import axios from "axios";

export const getCountry = async (country) => {
  try {
    let url = `https://restcountries.eu/rest/v2/name/${country}`;
    const response = await axios.get(url);
    return response;
  } catch (err) {
    return err;
  }
 };



export const searchCountry = async (country) => {
 try {
   let url = `https://restcountries.eu/rest/v2/alpha/${country}`;
   const response = await axios.get(url);
   return response;
 } catch (err) {
   return err;
 }
};

export const getcountryData = async (url) => {
 try {
   const response = await axios.get(url);
   return response;
 } catch (err) {
  return err;
 }
};