import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, batch } from 'react-redux';

import { START_API_URL_FORECAST, END_API_URL_FORECAST } from '../utils/urls';
import Results from './Results'
import search from '../reducers/search'

const UrlTest = () => {
  const dispatch = useDispatch();
  const [locationStart, setLocationStart] = useState([]);
  const [locationEnd, setLocationEnd] = useState([]);
  const [locationStartTime, setLocationStartTime] = useState([]);
  const [locationEndTime, setLocationEndTime] = useState([]);
  const [isShownResults, setIsShownResults] = useState(false);
  const [isShownSearch, setIsShownSearch] = useState(true);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setIsShownResults(true);
    setIsShownSearch(false);
    fetch(START_API_URL_FORECAST(locationStart, locationStartTime))
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          batch(() => {
            console.log(data);
            // console.log(data.forecast.forecastday[0].hour[0].temp_c);
            console.log(data.forecast.forecastday[0].hour[0].condition.text)
            dispatch(search.actions.setStartCityName(data.location.name));
            dispatch(
              search.actions.setStartTemp(
                data.forecast.forecastday[0].hour[0].temp_c
              )
            );
            dispatch(
              search.actions.setStartFeelsTemp(
                data.forecast.forecastday[0].hour[0].feelslike_c
              )
            );
            dispatch(
              search.actions.setStartDescription(
                data.forecast.forecastday[0].hour[0].condition.text
              )
            );
          });
        } else {
          batch(() => {
            dispatch(search.actions.setStartCityName(null));
            dispatch(search.actions.setStartTemp(null));
            dispatch(search.actions.setStartFeelsTemp(null));
            dispatch(search.actions.setStartDescription(null));
          });
        }
      });
    fetch(END_API_URL_FORECAST(locationEnd, locationEndTime))
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          batch(() => {
            console.log(data);
            console.log(data.forecast.forecastday[0].hour[0].temp_c);
            dispatch(search.actions.setEndCityName(data.location.name));
            dispatch(
              search.actions.setEndTemp(
                data.forecast.forecastday[0].hour[0].temp_c
              )
            );
            dispatch(
              search.actions.setEndFeelsTemp(
                data.forecast.forecastday[0].hour[0].feelslike_c
              )
            );
            dispatch(
              search.actions.setEndDescription(
                data.forecast.forecastday[0].hour[0].condition.text
              )
            );
          });
        } else {
          batch(() => {
            dispatch(search.actions.setEndCityName(null));
            dispatch(search.actions.setEndTemp(null));
            dispatch(search.actions.setEndDescription(null));
          });
        }
      });
  };
  return (
    <>
      {isShownSearch && (
        <SearchForm onSubmit={onFormSubmit}>
          <Selections>
            <Select
              type="text"
              placeholder="Start"
              value={locationStart}
              onChange={(e) => setLocationStart(e.target.value)} />
            <Time
              type="number"
              min="0"
              max="24"
              placeholder="Start Time"
              value={locationStartTime}
              onChange={(e) => setLocationStartTime(e.target.value)} />
            <Select
              type="text"
              placeholder="Destination"
              value={locationEnd}
              onChange={(e) => setLocationEnd(e.target.value)} />
            <Time
              type="number"
              min="0"
              max="24"
              placeholder="end Time"
              value={locationEndTime}
              onChange={(e) => setLocationEndTime(e.target.value)} />
          </Selections>
          <Button type="submit" aria-label="go">
            <Image src="./assets/right.png" />
          </Button>
        </SearchForm>
      )}
      {isShownResults && <Results />}
    </>
  );
};
export default UrlTest;

// styling
const SearchForm = styled.form`
display: flex;
flex-direction: column;
margin: 30px;
`

const Select = styled.input`
border: none;
width: 100%;
font-size: 25px;
margin: 100px 0;
text-align: center;
&:focus {
  outline: none;
}
&::-webkit-input-placeholder {
  color: #A9A9A9;
  font-size: 25px;
  margin-left: 30px;
}`

const Time = styled.input`
border: none;
width: 100%;
font-size: 25px;
margin: 100px 0;
text-align: center;
&:focus {
  outline: none;
}
&::-webkit-input-placeholder {
  color: #A9A9A9;
  font-size: 25px;
  margin-left: 30px;
}`
const Selections = styled.div`
display: flex;
flex-direction: row;
@media (min-width:768px) {
   flex-direction: column;
}`

const Image = styled.img`
width: 60px;
`
const Button = styled.button`
border: none;
background: white;`
