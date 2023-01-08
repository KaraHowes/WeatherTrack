import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';

const DateContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
`;
const Date = styled.h2`
  font-size: 35px;
  font-weight: 800;
  margin: 100px;
  color: white;
  font-family: 'Poppins', sans-serif;
`;

const Homescreen = () => {
  return (
    <DateContainer>
      <Date>{moment().format('HH:mm')}</Date>
    </DateContainer>
  );
};
export default Homescreen;
