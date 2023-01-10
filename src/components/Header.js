import React from 'react';
import styled from 'styled-components/macro';

import Homescreen from './Homescreen';

const Header = () => {
  return (
    <Head>
      <Homescreen />
    </Head>
  );
};
export default Header;

// styling
const Head = styled.header`
  height: 45%;
  width: 100%;
  background: url(./assets/matterhorn_light_green.png) no-repeat, linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
  position: relative;
  background-size: 100%;
  background-position: bottom;
`;
