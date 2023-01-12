// export const BASE_FORECAST_URL = (cityslug) => `https://api.openweathermap.org/data/2.5/weather?q=$&units=metric&APPID=ad0eb5f0c488721a69e3cb4d4cef6ea9
// export const BASE_WEATHER_URL =
// 'https://api.openweathermap.org/data/2.5/weather?'
// export const START_API_URL =
// (locationStart) =>
// `${BASE_WEATHER_URL}q=${locationStart}&units=metric&APPID=ad0eb5f0c488721a69e3cb4d4cef6ea9`
// export const END_API_URL =
// (locationEnd) =>
// `${BASE_WEATHER_URL}q=${locationEnd}&units=metric&APPID=ad0eb5f0c488721a69e3cb4d4cef6ea9`

export const BASE_WEATHER_URL_FORECAST = 'https://api.weatherapi.com/v1/forecast.json?key=f4bacd5e89344a3bbb795100231101&'
export const START_API_URL_FORECAST = (locationStart, locationTime) => `${BASE_WEATHER_URL_FORECAST}q=${locationStart}&days=1&aqi=no&alerts=no&hour=${locationTime}`
export const END_API_URL_FORECAST = (locationEnd, locationEndTime) => `${BASE_WEATHER_URL_FORECAST}q=${locationEnd}&days=1&aqi=no&alerts=no&hour=${locationEndTime}`
