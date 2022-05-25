import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setyCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setyCountries(data));
  }, []);

  return (
    <div className="countries">
      {countries.map(country => (
        <Country key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default Countries;
