import React, { useState } from 'react';

import { BASE_FORECAST_URL } from './utils/urls';

export const App = () => {
  const [location, setLocation] = useState([]);
  const [details, setDetails] = useState('');
  const onFormSubmit = (event) => {
    event.preventDefault();
    // fetch(`${BASE_FORECAST_URL}?q=${location}`)
    fetch(BASE_FORECAST_URL)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      });
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <h2>Search location:</h2>
        <select
          id="locationInput"
          value={location}
          onChange={(e) => setLocation(e.target.value)}>
          <option disabled value="">
            Location:
          </option>
          <option value="Zurich">Zurich</option>
          <option value="Basel">Basel</option>
          <option value="Geneva">Geneva</option>
          <option value="Bern">Bern</option>
          <option value="Luzern">Luzern</option>
          <option value="Lugano">Lugano</option>
        </select>

        <button type="submit">Submit</button>
      </form>
      <div> city: {details.name}  </div>
      <div> temp: {details.main.temp}  </div>
    </>
  );
};
