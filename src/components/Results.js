import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components/macro';

import StartIcon from './StartIcon'
import EndIcon from './EndIcon'

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

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Container>
      <Day>{moment().format('dddd')}</Day>
      <Table>
        <City> {startCity} </City>
        <City>{endCity} </City>
      </Table>
      <Table>
        <Temp>{numberStartTemp} &deg;C</Temp>
        <Temp>{numberEndTemp} &deg;C</Temp>
      </Table>
      <Table>
        <Feels>The Feels: {numberStartFeelsTemp} &deg;C</Feels>
        <Feels>The Feels: {numberEndFeelsTemp} &deg;C</Feels>
      </Table>
      <Table>
        <Icon><StartIcon /></Icon>
        <Icon><EndIcon /></Icon>
      </Table>
      <Table>
        <City>{startDesc}</City>
        <City>{endDesc}</City>
      </Table>
      <Button type="submit" aria-label="go" onClick={refreshPage}>
        <Image src="./assets/left.png" />
      </Button>
    </Container>
  );
};
export default Results;

// styling
const Container = styled.section`
margin: 20px auto;
justify-content: center;
`
const Day = styled.h1`
  font-size: 50px;
  font-weight: 800;
  margin: 10px;
  text-align: center;`
const Table = styled.div`
display: flex;
flex-direction: row;
width: 100%;
text-align: center;
margin: 40px 0;`
const City = styled.h2`
width: 50%;
font-size: 20px;
`
const Temp = styled.h1`
font-size: 50px;
font-weight: 600;
width: 50%`
const Feels = styled.h3`
font-size: 20px;
font-weight: 600;
width: 50%`
const Icon = styled.div`
width: 50%`
const Image = styled.img`
width: 60px;
`
const Button = styled.button`
border: none;
background: white;
margin: 20px auto;
display: block;`