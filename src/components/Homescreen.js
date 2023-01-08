import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';

const DateContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin: 10px 10px 0 0;
  font-weight: bold;
`;
const Date = styled.h2`
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  color: black;
`;

const Homescreen = () => {
  return (
    <DateContainer>
      <Date>{moment().format('dddd')}</Date>
    </DateContainer>
  );
};
export default Homescreen;
