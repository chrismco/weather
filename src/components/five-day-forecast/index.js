import React, { Component } from 'react';
import _ from 'lodash';

class FiveDayWeatherForecast extends Component {

  groupForecastByDays = data => {
    return (data.reduce((forecastList, i) => {
      let date = i.dt_txt.substr(0, 10);
      forecastList[date] = forecastList[date] || [];
      forecastList[date].push(i);

      return forecastList;
    }, {}));
  };



  dayOfWeek = data => {
   console.log(new Date(data[0].dt).toLocaleString('en-US', {timeZone: 'UTC'}));
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[new Date(data[0].dt * 1000).getDay()];
  };

  forecastDescription = (data, description = [], count=0 ) => {
  
    data.map(i => {
      count++;
      if(count == 1){
        description.push(i.weather[0].main);
      }
    });

    return (
      <span>{`${description}`}</span>
    )
  }

  forecastInfo = (data, min = [], max = []) => {
  
    data.map(i => {
      min.push(i.main.temp_min);
      max.push(i.main.temp_max);
    });

    const minMax = {
      min: _.round(Math.min.apply(Math, min)),
      max: _.round(Math.max.apply(Math, max)),
    };

    const tempConvertKelvinToFahrenheit = val => {
      let valNum = ((val - 273.15) * 1.8) + 32;
      return Math.round(valNum);
    }


    return (
      <div className="highLow">
        <div className="min-max">
          <strong>{`${tempConvertKelvinToFahrenheit(minMax.max)}°F`}</strong> / {`${tempConvertKelvinToFahrenheit(minMax.min)}°F`}
        </div>
      </div>
    );
  };




  render() {
    const { forecastList } = this.props;

    const forecastRows = forecastList ? Object.values(this.groupForecastByDays(forecastList)) : [];
    const forecastGroup = forecastRows.length > 5 ? forecastRows.slice(0, 5) : forecastRows;
    // console.log(forecastRows)

    return (

      <table className="table table-striped">
        <thead>
          <tr>
            {['Day', 'Description', 'High/Low'].map((title, i) => (
              <th key={i} >{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {forecastGroup.map((row, i) => (
            <tr key={i} scope="row">
              <td><strong>{this.dayOfWeek(row)}</strong></td>
              <td>
               {this.forecastDescription(row)}
              </td>
              <td>{this.forecastInfo(row)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default FiveDayWeatherForecast;