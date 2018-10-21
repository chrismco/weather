import React, { Component } from 'react';

//May turn this into a dashboard for multiple cities
class City extends Component {

     tempConvertKelvinToFahrenheit = val => {
        let valNum = ((val - 273.15) * 1.8) + 32;
        return Math.round(valNum);
      }

    render() {
        const { city } = this.props;
        const {main, weather,name} = city;
        return (
            <div id="current">
                <h1>{name}</h1>
                <div className="currentCondition">
                {weather.map((item, i) => (
              <h2 key={i} >Current Condition: {item.main}</h2>
            ))}
                </div>
                <h4>Today's High/Low : {`${this.tempConvertKelvinToFahrenheit(main.temp_max)}°F`} / {`${this.tempConvertKelvinToFahrenheit(main.temp_min)}°F`}</h4>
            </div>

        )
    }
}


export default City;