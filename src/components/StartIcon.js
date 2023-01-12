import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

const StartIcon = () => {
  const startDesc = useSelector((store) => store.search.startDescription);

  if (startDesc.includes('rain')) {
    return <Icon src="./assets/rain.png" alt="rain" />;
  } else if (startDesc.includes('cloud')) {
    return <Icon src="./assets/cloud.png" alt="cloud" />;
  } else if (startDesc.includes('snow')) {
    return <Icon src="./assets/snowflake.png" alt="snowflake" />;
  } else if (startDesc.includes('thunder')) {
    return <Icon src="./assets/thunder.png" alt="thunder" />;
  } else if (startDesc.includes('fog')) {
    return <Icon src="./assets/fog.png" alt="fog" />;
  } else if (startDesc.includes('mist')) {
    return <Icon src="./assets/fog.png" alt="mist" />;
  } else if (startDesc.includes('sun')) {
    return <Icon src="./assets/sun.png" alt="sun" />;
  } else if (startDesc.includes('clear')) {
    return <Icon src="./assets/sunny.png" alt="clear" />;
  } else if (startDesc.includes('drizzle')) {
    return <Icon src="./assets/light-rain.png" alt="drizzle" />;
  } else if (startDesc.includes('Overcast')) {
    return <Icon src="./assets/cloud.png" alt="cloudy" />;
  } else { return (<div>No image available</div>) }
};
export default StartIcon;

// styling
const Icon = styled.img`
width: 80px;
`