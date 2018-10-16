import {createStore, applyMiddleware, compose} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import combinedReducers from './reducers/allReducers';
import logger from 'redux-logger';

//Sync browser history with store
export const history = createHistory();


const initialState = {};
const middleware = [thunk, logger, routerMiddleware(history)];
const enhancers = [window.devToolsExtension && window.devToolsExtension()];


const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)


const createWeatherStore = () => {
    //consist of reducers, state, enhancers
    const store = createStore(
        combinedReducers,
        initialState,
        composedEnhancers
    )
// console.log(store.getState())
    return store;
}


export default createWeatherStore;
