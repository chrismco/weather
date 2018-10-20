import React, { Component } from "react";

import FiveDayWeatherForecast from '../five-day-forecast/';
import City from '../city'

const Forecast = ({current, forecast}) => {
   const {list} = forecast;

    return (
        <div>
             <City city={current}/>
             <FiveDayWeatherForecast forecastList={list}/> 
        </div>
    )
}

export default Forecast;