import {combineReducers} from 'redux';
import FetchByZip  from './searchWeatherByCity';
import FetchFiveDay  from './search5DayForecast';




export default combineReducers({
    FetchWeatherByZip: FetchByZip,
    FetchFiveDayForecast: FetchFiveDay
});