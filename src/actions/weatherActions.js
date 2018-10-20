export const FETCH_WEATHER_BEGIN = 'FETCH_WEATHER_BEGIN';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAIL = 'FETCH_WEATHER_FAIL';


export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';





export const fetchWeatherBegin = () => ({
  type: FETCH_WEATHER_BEGIN
});

export const fetchWeatherSuccess = weather => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: { weather }
});


export const fetchForecastSuccess = forecast => ({
  type: FETCH_FORECAST_SUCCESS,
  payload: { forecast }
});

export const fetchWeatherFailure = error => ({
  type: FETCH_WEATHER_FAIL,
  payload: { error }
});


const API_KEY = '23015ac5f91847e08277a4d94cbe5b7f';
const API_URLS = [`http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`, `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`]

export const fetchAllData = zipValue => {

  return async dispatch => {
    dispatch(fetchWeatherBegin());
    try {
      let data = await Promise.all(
        API_URLS.map(url =>
          fetch(`${url}&zip=${zipValue},us`).then((response) => response.json())
        ));
        dispatch(fetchWeatherSuccess(data));
      // console.log(data)
      return data;
    } catch (e) {
      handleErrors(e);
      dispatch(fetchWeatherFailure(e));
    }
  }
}

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}