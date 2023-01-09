import React from 'react';
import { useSelector } from 'react-redux';

const StartIcon = () => {
  const endDesc = useSelector((store) => store.search.endDescription);

  if (endDesc.includes('rain')) {
    return <img src="./assets/rain.png" alt="model" />;
  } else if (endDesc.includes('cloud')) {
    return <img src="./assets/cloud.png" alt="model" />;
  } else if (endDesc.includes('snow')) {
    return <img src="./assets/snowflake.png" alt="model" />;
  } else if (endDesc.includes('thunder')) {
    return <img src="./assets/thunder.png" alt="model" />;
  } else if (endDesc.includes('fog')) {
    return <img src="./assets/fog.png" alt="model" />;
  } else if (endDesc.includes('mist')) {
    return <img src="./assets/fog.png" alt="model" />;
  } else if (endDesc.includes('sun')) {
    return <img src="./assets/sun.png" alt="model" />;
  } else { return (<div>No image available</div>) }
};
export default StartIcon;
