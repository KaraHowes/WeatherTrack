import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';

const DateContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
`;
const Date = styled.h2`
  font-size: 30px;
  font-weight: 800;
  margin: 0;
  color: white;
  font-family: 'Poppins', sans-serif;
`;

const Homescreen = () => {
  return (
    <DateContainer>
      <Date>{moment().format('dddd')}</Date>
    </DateContainer>
  );
};
export default Homescreen;
