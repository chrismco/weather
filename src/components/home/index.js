import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchAll, fetchAllData } from '../../actions/weatherActions';
import Forecast from '../weather/';
import spinner from '../../assets/spinner.gif';
import { bindActionCreators } from 'redux';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
    }

    timer = null;
    handleChange = e => {
        clearTimeout(this.timer)

        this.setState({ value: e.target.value })

        this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL)
    }

    handleKeyDown = e => {
        if (e.keyCode === ENTER_KEY) {
            clearTimeout(this.timer)
            this.triggerChange();
        }
    }

    triggerChange = () => {
        const { value } = this.state;
        // console.log(this.state)

        this.changeHandler(value)
    }

    componentDidMount = () => {
        // this.props.FetchAll('77056');
       this.props.FetchAllData('77056');
    }



    changeHandler = (value) => {
        let newValue = parseInt(value);


        if (value.length === 5) {
            this.props.FetchAllData(newValue);
        } else {
            return false;
        }



    }
    render() {
        const {isFetching, apiCityData, apiForecastData } = this.props;

        
        return (
            (isFetching || (!apiCityData || !apiForecastData)) ? (
                <div>
                    <img src={spinner} />
                </div>
            ) : (
                    <div>
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input className="form-control" value={this.state.value} name="city" placeholder="Search by zip" onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
                        </div>
                        <Forecast current={apiCityData} forecast={apiForecastData}  />
                    </div>
                )
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {FetchAllData: fetchAllData }, dispatch);
}

const mapStateToProps = state => ({
    apiCityData: state.FetchCityWeather.data[0],
    apiForecastData: state.FetchCityWeather.data[1],
    isFetching: state.FetchCityWeather.isFetching,
    error: state.FetchCityWeather.error
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);