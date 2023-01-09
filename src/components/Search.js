import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, batch } from 'react-redux';
// import { BASE_FORECAST_URL } from './utils/urls';
import Results from './Results'
import search from '../reducers/search'

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

const Search = () => {
  const dispatch = useDispatch();
  const [locationStart, setLocationStart] = useState([]);
  const [locationEnd, setLocationEnd] = useState([]);
  const [isShownResults, setIsShownResults] = useState(false);
  const [isShownSearch, setIsShownSearch] = useState(true);

  const onFormSubmit = (event) => {
    event.preventDefault()
    setIsShownResults(true)
    setIsShownSearch(false)
    // fetch(`${BASE_
    // FORECAST_URL}q=${locationStart}&units=metric&APPID=ad0eb5f0c488721a69e3cb4d4cef6ea9`)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locationStart}&units=metric&APPID=ad0eb5f0c488721a69e3cb4d4cef6ea9`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          batch(() => {
            console.log(data);
            dispatch(search.actions.setStartCityName(data.name));
            dispatch(search.actions.setStartTemp(data.main.temp));
            dispatch(search.actions.setStartFeelsTemp(data.main.feels_like));
            dispatch(
              search.actions.setStartDescription(
                data.weather[0].description
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
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locationEnd}&units=metric&APPID=ad0eb5f0c488721a69e3cb4d4cef6ea9`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          batch(() => {
            console.log(data);
            dispatch(search.actions.setEndCityName(data.name));
            dispatch(search.actions.setEndTemp(data.main.temp));
            dispatch(search.actions.setEndFeelsTemp(data.main.feels_like));
            dispatch(
              search.actions.setEndDescription(
                data.weather[0].description
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

            <Select
              type="text"
              placeholder="Destination"
              value={locationEnd}
              onChange={(e) => setLocationEnd(e.target.value)} />
          </Selections>
          <Button type="submit" aria-label="go"><Image src="./assets/right.png" /></Button>
        </SearchForm>
      )}
      {isShownResults && <Results />}
    </>
  );
};
export default Search;
