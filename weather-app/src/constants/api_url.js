const location ="Buenos Aires,ar";
const api_key ="2856124217d1a6c58a5f28e2f10e3b54";
const url_base_weather ="http://api.openweathermap.org/data/2.5/weather";


export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;