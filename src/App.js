import React, { useState } from 'react';

// import { BASE_FORECAST_URL } from './utils/urls';

export const App = () => {
  const [locationStart, setLocationStart] = useState([]);
  const [locationEnd, setLocationEnd] = useState([]);
  const [detailsStart, setDetailsStart] = useState('');
  const [detailsEnd, setDetailsEnd] = useState('');
  const onFormSubmit = (event) => {
    event.preventDefault();
    // fetch(`${BASE_FORECAST_URL}?q=${location}`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationStart}&units=metric&APPID=ad0eb5f0c488721a69e3cb4d4cef6ea9`)
      .then((res) => res.json())
      .then((data) => {
        setDetailsStart(data);
        console.log(data);
      });
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationEnd}&units=metric&APPID=ad0eb5f0c488721a69e3cb4d4cef6ea9`)
      .then((res) => res.json())
      .then((data) => {
        setDetailsEnd(data);
      // console.log(data);
      });
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <h2>Start:</h2>
        <select
          id="locationStartInput"
          value={locationStart}
          onChange={(e) => setLocationStart(e.target.value)}>
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

        <h2>Destination:</h2>
        <select
          id="locationEndInput"
          value={locationEnd}
          onChange={(e) => setLocationEnd(e.target.value)}>
          <option disabled value="">
            Location:
          </option>
          <option value="manchester">manchester</option>
          <option value="leeds">leeds</option>
          <option value="hull">hull</option>
          <option value="london">london</option>
          <option value="bradford">bradford</option>
          <option value="birmingham">birmingham</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <div> Starter city: {detailsStart.name}  </div>
      <div> temperature: {detailsStart.main.temp}  </div>

      <div> Destination city: {detailsEnd.name}  </div>
      <div> temperature: {detailsEnd.main.temp}  </div>
    </>
  );
};
