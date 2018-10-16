import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ReactTextField, validator } from 'react-textfield';


class SearchZipInput extends Component {
    render(){
        return(
            <div>
                <form>
                    <ReactTextField
                        name="searchLocationForWeather"
                        type="Search Zip Code"
                        value={this.props.weather.zip}
                        onChange={this.props.onChange}
                        />
                </form>
            </div>
        )
    }
}

SearchZipInput.propTypes = {
    weather: PropTypes.object.is
}