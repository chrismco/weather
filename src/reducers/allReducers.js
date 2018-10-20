import {combineReducers} from 'redux';
import FetchCityWeather  from './searchWeatherByCity';




export default combineReducers({
    FetchCityWeather: FetchCityWeather,
});