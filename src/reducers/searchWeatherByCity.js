
import {FETCH_WEATHER_BEGIN, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAIL, FETCH_FORECAST_SUCCESS} from '../actions/weatherActions';

const initialState = {
    city: [],
    forecast: [],
    isFetching: false,
    error: null
}

const fetchByZip  = (state = initialState, {type, payload}) => {
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
            city: payload.city,
        }

        case FETCH_FORECAST_SUCCESS:
        return{
            ...state,
            isFetching:false,
            forecast: payload.forecast,
        }
        case FETCH_WEATHER_FAIL:
        return{
            ...state,
            isFetching: false,
            error: payload.error,
            cities: []
        }
        
        
        default:
        return state;
        
    }
}

export default fetchByZip;
