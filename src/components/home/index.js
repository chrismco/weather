import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchWeather, fetchAll} from '../../actions/weatherActions';
import { fetchForecast } from '../../actions/fetchfiveDayForecast';
import Forecast from '../weather/';
import spinner from '../../assets/spinner.gif'
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
        this.props.FetchAll('77056');
    }



    changeHandler = (value) => {
        let newValue = parseInt(value);


        if(value.length === 5){
            this.props.FetchAll(newValue);
        }else{
            return false;
        }

     

    }
    render() {
        const { apiResponse, apiResponseForecast, isFetching } = this.props;

        // console.log(apiResponse)
        
        return (
            (isFetching)? (
                <div>
                    <img src={spinner} />
                </div>
            ) : (
                    <div>
                        <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                            <input className="form-control" value={this.state.value} name="city" placeholder="Search by zip" onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
                        </div>
                        <Forecast current={apiResponse} forecast={apiResponseForecast} />
                    </div>
                )
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { FetchAll:fetchAll}, dispatch);
}

const mapStateToProps = state => ({
    apiResponse: state.FetchWeatherByZip.city,
    apiResponseForecast: state.FetchWeatherByZip.forecast,
    isFetching: state.FetchWeatherByZip.isFetching,
    error: state.FetchWeatherByZip.error
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);