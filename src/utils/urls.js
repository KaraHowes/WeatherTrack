// export const BASE_FORECAST_URL = (cityslug) => `https://api.openweathermap.org/data/2.5/weather?q=$&units=metric&APPID=ad0eb5f0c488721a69e3cb4d4cef6ea9
export const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'
export const START_API_URL = (locationStart) => `${BASE_WEATHER_URL}q=${locationStart}&units=metric&APPID=ad0eb5f0c488721a69e3cb4d4cef6ea9`
export const END_API_URL = (locationEnd) => `${BASE_WEATHER_URL}q=${locationEnd}&units=metric&APPID=ad0eb5f0c488721a69e3cb4d4cef6ea9`