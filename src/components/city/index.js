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
        const cityMain = city.main  ? city.main : {} ;
        const cityweather = city.weather  ? city.weather : [] ;

        //Not the best solution right here, fix this Chris
        let count = 0;
        const mainWeather = cityweather.filter((item) => {
            count++;
            return count == 1 ? item.main: '';
        })

     

        return (
            <div id="current">
                <div className="search">

                </div>
                <h1>{city.name}</h1>
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