import React, { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  ];

  let filteredCountries = countries;
  if (searchInput.length > 0) {
    filteredCountries = countries.filter((country) => {
      return country.name.match(searchInput);
    });
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
        style={{width: "500px"}}
        /*style={{height: "20px"}} */
      />
    
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Continent</th>
          </tr>
        </thead>

        <tbody>
          {filteredCountries.map((country, index) => {
            return (
              <tr key={index}>
                <td>{country.name}</td>
                <td>{country.continent}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Search;