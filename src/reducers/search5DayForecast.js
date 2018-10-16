
import {FETCH_FORECAST_BEGIN, FETCH_FORECAST_SUCCESS, FETCH_FORECAST_FAIL} from '../actions/fetchfiveDayForecast';

const initialState = {
    forecast: [],
    isFetching: false,
    error: null
}

const fetchFiveDayForecast  = (state = initialState, {type, payload}) => {
    switch(type){
        case FETCH_FORECAST_BEGIN:
        return {
            ...state,
            isFetching:true,
            error: null
        }

        case FETCH_FORECAST_SUCCESS:
        return{
            ...state,
            isFetching:false,
            forecast: payload.forecast,
        }
        case FETCH_FORECAST_FAIL:
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

export default fetchFiveDayForecast;
