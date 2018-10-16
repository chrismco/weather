export const FETCH_WEATHER_BEGIN = 'FETCH_WEATHER_BEGIN';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAIL = 'FETCH_WEATHER_FAIL';


export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';





export const fetchWeatherBegin = () => ({
    type: FETCH_WEATHER_BEGIN
});

export const fetchWeatherSuccess = city => ({
    type: FETCH_WEATHER_SUCCESS,
          payload: {city}
});


export const fetchForecastSuccess = forecast => ({
  type: FETCH_FORECAST_SUCCESS,
   payload: {forecast}
});

export const fetchWeatherFailure = error => ({
    type: FETCH_WEATHER_FAIL,
    payload: {error}
});





const fetchCity = (zipValue) => {
  let API_KEY = '23015ac5f91847e08277a4d94cbe5b7f';
  let API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

  return dispatch => {
    dispatch(fetchWeatherBegin());
      return fetch(`${API_URL}&zip=${zipValue},us`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchWeatherSuccess(json));
           return json;
        })
        .catch(error => dispatch(fetchWeatherFailure(error)));
  }
}

const fetchForecast = (zipValue) => {
  const API_KEY = '23015ac5f91847e08277a4d94cbe5b7f';
  const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

  return dispatch => {
   dispatch(fetchWeatherBegin());
    return fetch(`${API_URL}&zip=${zipValue},us`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchForecastSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchWeatherFailure(error)));
  };
}

export const fetchAll = (zipValue) => {
  return dispatch => Promise.all([
    dispatch(fetchCity(zipValue)),
    dispatch(fetchForecast(zipValue))
  ]);
}

export function fetchWeather(zipValue) {
    const API_KEY = '23015ac5f91847e08277a4d94cbe5b7f';
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

    return dispatch => {
      dispatch(fetchWeatherBegin());
      return fetch(`${API_URL}&zip=${zipValue},us`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchWeatherSuccess(json));
          // return json;
        })
        .catch(error => dispatch(fetchWeatherFailure(error)));
    };
  }


  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }