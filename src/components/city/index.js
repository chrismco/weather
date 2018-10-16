import React, { Component } from 'react';


class City extends Component {

    groupCity = data => {
        return (data.reduce((cityList, i) => {
          cityList[i] = cityList[i] || [];
          cityList[i].push(i);
    
          return cityList;
        }, {}));
      };

     tempConvertKelvinToFahrenheit = val => {
        let valNum = ((val - 273.15) * 1.8) + 32;
        return Math.round(valNum);
      }

    render() {
        const { city } = this.props;
        const {main, weather,name} = city;
        const cityMain = main ? main : {} ;
        const cityweather = weather  ? weather : [] ;

        //Not the best solution right here, fix this Chris
        let count = 0;
        const mainWeather = cityweather.filter((item) => {
            count++;
            return count == 1 ? item.main: '';
        });

        // console.log(weather[0])
        
      
        return (
            <div id="current">
                <h1>{name}</h1>
                <div className="currentCondition">
                {mainWeather.map((item, i) => (
              <h2 key={i} >Current Condition: {item.main}</h2>
            ))}
                </div>
              
              
                <h4>Today's High/Low : {`${this.tempConvertKelvinToFahrenheit(cityMain.temp_max)}°F`} / {`${this.tempConvertKelvinToFahrenheit(cityMain.temp_min)}°F`}</h4>
            </div>

        )
    }
}


export default City;