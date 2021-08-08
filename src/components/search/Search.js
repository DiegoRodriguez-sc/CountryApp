import React, { useState } from "react";

const Search = ({ onSearch , selectOptions }) => {

  const [search, setSearch] = useState("");
  const handleChangeInput = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch(search);
  };

  const handleOptions = (e)=>{
      selectOptions(e.target.value);
  }

  return (
    <div className="search__container">
      <div className="search__input-container">
        <form onSubmit={handleSubmit} className="search__input">
          <input placeholder="Search country..." onChange={handleChangeInput} />
          <button type="submit" className="search__btn"><i className="fas fa-search"></i></button>
        </form>
      </div>
      <div className="search__continents">
        <select name="select-continents" className="search__options-continents" onChange={handleOptions}>
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
