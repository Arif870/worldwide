import React from "react";

const Country = props => {
  const { flags, name, capital, population } = props.country;

  return (
    <div>
      <img
        style={{ width: "300px", height: "200px" }}
        src={flags.png}
        alt=""
        srcset=""
      />
      <h1>{name.common}</h1>
      <span>Population : {population}</span>
      <p>Capital : {capital}</p>
    </div>
  );
};

export default Country;
