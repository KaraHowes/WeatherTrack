import React from 'react';
import { useSelector } from 'react-redux';

const StartIcon = () => {
  const startDesc = useSelector((store) => store.search.startDescription);

  if (startDesc.includes('rain')) {
    return <img src="./assets/rain.png" alt="model" className="icon" />;
  } else if (startDesc.includes('cloud')) {
    return <img src="./assets/cloud.png" alt="model" className="icon" />;
  } else if (startDesc.includes('snow')) {
    return <img src="./assets/snowflake.png" alt="model" className="icon" />;
  } else if (startDesc.includes('thunder')) {
    return <img src="./assets/thunder.png" alt="model" className="icon" />;
  } else if (startDesc.includes('fog')) {
    return <img src="./assets/fog.png" alt="model" className="icon" />;
  } else if (startDesc.includes('mist')) {
    return <img src="./assets/fog.png" alt="model" className="icon" />;
  } else if (startDesc.includes('sun')) {
    return <img src="./assets/sun.png" alt="model" className="icon" />;
  } else { return (<div>No image available</div>) }
};
export default StartIcon;
