import React, { Component } from 'react';
import createWeatherStore, {history} from '../../store';
import { Provider } from 'react-redux';
import WeatherContainer from '../weatherContainer';
import { ConnectedRouter } from 'connected-react-router';


const store = createWeatherStore();

console.log(store.getState())

class App extends Component {
    render() {
        if(store){
            return (
                <Provider store={store}>
                 {/* <ConnectedRouter history={history}> */}
                    <section id="mainWeatherSection">
                        <div className="container">
                        <WeatherContainer />
                        </div>
                    </section>
                    {/* </ConnectedRouter> */}
                </Provider>
            )
        }else{
            return <p>Loading....</p>
        }
   
    }
}
export default App;