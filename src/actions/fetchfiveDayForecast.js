export const FETCH_FORECAST_BEGIN = 'FETCH_FORCAST_BEGIN';
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';
export const FETCH_FORECAST_FAIL = 'FETCH_FORECAST_FAIL';



export const fetchForecastBegin = () => ({
    type: FETCH_FORECAST_BEGIN
});

export const fetchForecastSuccess = forecast => ({
    type: FETCH_FORECAST_SUCCESS,
     payload: {forecast}
});

export const fetchForecastFailure = error => ({
    type: FETCH_FORECAST_FAIL,
    payload: {error}
});

export function fetchForecast(zipValue) {
    const API_KEY = '23015ac5f91847e08277a4d94cbe5b7f';
    const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

    return dispatch => {
     dispatch(fetchForecastBegin());
      return fetch(`${API_URL}&zip=${zipValue},us`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchForecastSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchForecastFailure(error)));
    };
  }


  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }