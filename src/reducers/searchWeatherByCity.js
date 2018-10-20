
import {FETCH_WEATHER_BEGIN, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAIL, FETCH_FORECAST_SUCCESS} from '../actions/weatherActions';

const initialState = {
    data: {},
    isFetching: false,
    error: null
}

const fetchCityWeather  = (state = initialState, {type, payload}) => {
    switch(type){
        case FETCH_WEATHER_BEGIN:
        return {
            ...state,
            isFetching:true,
            error: null
        }
        case FETCH_WEATHER_SUCCESS:
        return{
            ...state,
            isFetching:false,
            data: payload.weather,
        }
        case FETCH_WEATHER_FAIL:
        return{
            ...state,
            isFetching: false,
            error: payload.error,
            data: {}
        }
        default:
        return state;
        
    }
}

export default fetchCityWeather;
