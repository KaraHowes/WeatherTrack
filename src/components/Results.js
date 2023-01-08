import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const Temp = styled.h1`
font-family: 'Poppins', sans-serif;
font-size: 30px;
font-weight: 600;`

const Results = () => {
  const startCity = useSelector((store) => store.search.startCityName);
  const startTemp = useSelector((store) => store.search.startTemp);
  const numberStartTemp = Number(startTemp).toFixed(0) // needed to convert the string into a number
  const startFeelTemp = useSelector((store) => store.search.startFeelsTemp);
  const numberStartFeelsTemp = Number(startFeelTemp).toFixed(0) // convert the string into a number
  const startDesc = useSelector((store) => store.search.startDescription);
  const endCity = useSelector((store) => store.search.endCityName);
  const endTemp = useSelector((store) => store.search.endTemp);
  const numberEndTemp = Number(endTemp).toFixed(0)// needed to convert the string into a number
  const endFeelTemp = useSelector((store) => store.search.endFeelsTemp);
  const numberEndFeelsTemp = Number(endFeelTemp).toFixed(0)// convert the string into a number
  const endDesc = useSelector((store) => store.search.endDescription);

  return (
    <>
      <div> Starter city: {startCity} </div>
      <Temp> temperature: {numberStartTemp} </Temp>
      <div> Feels-like: {numberStartFeelsTemp} </div>
      <div> description: {startDesc} </div>

      <div> Destination city: {endCity} </div>
      <Temp> temperature: {numberEndTemp} </Temp>
      <div> Feels-like: {numberEndFeelsTemp} </div>
      <div> description: {endDesc} </div>
    </>
  );
};
export default Results;