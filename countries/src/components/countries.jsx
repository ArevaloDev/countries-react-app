import { useState } from "react";

export default function Countries({
  countries,
}) {
  console.log(countries);

  return (
    <>
      {countries.length > 0 ? (
        <p>No hay datos</p>
      ) : (
        <>
          <div className=" d-flex card m-3 text-align-center ">
            <h3>{countries.name.common}</h3>
            <p>{countries.continents}</p>
            <img
              src={countries.flags.png}
              className="card-img-top img-card"
              alt="..."
            />
            <div className="card-body ">
              <p className="card-text">Capital: {countries.capital}</p>
              <p className="card-text">Population: {countries.population}</p>
              <p className="card-text">Spellings: {countries.altSpellings}</p>
            </div>
          </div>
        </>
      )}

    </>
  );
}
