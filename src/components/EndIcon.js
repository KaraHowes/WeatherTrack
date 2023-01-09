import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

const EndIcon = () => {
  const endDesc = useSelector((store) => store.search.endDescription);

  if (endDesc.includes('rain')) {
    return <Icon src="./assets/rain.png" alt="rain" />;
  } else if (endDesc.includes('cloud')) {
    return <Icon src="./assets/cloud.png" alt="cloud" />;
  } else if (endDesc.includes('snow')) {
    return <Icon src="./assets/snowflake.png" alt="snow" />;
  } else if (endDesc.includes('thunder')) {
    return <Icon src="./assets/thunder.png" alt="thunder" />;
  } else if (endDesc.includes('fog')) {
    return <Icon src="./assets/fog.png" alt="fog" />;
  } else if (endDesc.includes('mist')) {
    return <Icon src="./assets/fog.png" alt="mist" />;
  } else if (endDesc.includes('sun')) {
    return <Icon src="./assets/sun.png" alt="sun" />;
  } else if (endDesc.includes('clear')) {
    return <Icon src="./assets/sunny.png" alt="sun" />;
  } else { return (<div>No image available</div>) }
};
export default EndIcon;

// styling
const Icon = styled.img`
width: 80px;
`