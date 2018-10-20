import React from 'react';
import createWeatherStore from '../../store';
import { Provider } from 'react-redux';
import WeatherContainer from '../weatherContainer';
import spinner from '../../assets/spinner.gif';


const store = createWeatherStore();

// console.log(store.getState())

const App = () => (
        (store) ? (
            <Provider store={store}>
            {/* <ConnectedRouter history={history}> */}
               <section id="mainWeatherSection">
                   <div className="container">
                   <WeatherContainer />
                   </div>
               </section>
               {/* </ConnectedRouter> */}
           </Provider>
        ) : (
            <img src={spinner} />
        )
)
export default App;