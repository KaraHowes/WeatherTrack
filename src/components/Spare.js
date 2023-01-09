{startDesc.includes('clouds') ? (
    <img src="./assets/cloud.png" alt="model" />
  ) : startDesc.includes('sun') ? (
    <img src="./assets/sun.png" alt="model" />
  ) : startDesc.includes('rain') ? (
    <img src="./assets/rain.png" alt="model" />
  ) : startDesc.includes('snow') ? (
    <img src="./assets/snowflake.png" alt="model" />
  ) : startDesc.includes('fog') ? (
    <img src="./assets/fog.png" alt="model" />
  ) : startDesc.includes('mist') ? (
    <img src="./assets/fog.png" alt="model" />
  ) : (
    <div />
  )}