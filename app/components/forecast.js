import React from 'react';
import { Router, Link } from 'react-router';
import WeatherItem from '../components/weatherItem';
import Api from '../helpers/api';

const Forecast = React.createClass({
	contextTypes: {
    	router: React.PropTypes.object.isRequired
  	},
	getInitialState() {
		return {
			isLoading: true,
			forecast: {},
			location: ''
		}
	},
	componentDidMount() {
		this.getData(this.props.routeParams.city);
	},
	componentWillReceiveProps(nextProps) {
		if(nextProps.params.city !== this.props.params.city) {
			this.getData(nextProps.routeParams.city);
		}
	},
	getData(city) {
		Api.getWeather(city).then((response) => {
			this.setState({
				forecast: response.data,
				isLoading: false,
				location: `${response.data.city.name }, ${response.data.city.country}`
			});
		});
	},
	handleClick(forecast) {
		this.context.router.push({
			pathname: `detail/${this.props.routeParams.city}`,
			state: {
				forecast: forecast,
				location: this.state.location
			}
		});
	},
	renderForecast() {
		if(this.state.isLoading) {
			return (
				<p className="text-center">Loading...</p>
			)
		} else {
			return (
				<div className="container">
					<h3 className="text-center">{this.state.forecast.city.name}, {this.state.forecast.city.country} <br/> <small>6 day forecast</small></h3>
					<br/>
					<div className="row">
						{this.state.forecast.list.map((obj, key) => { 
							return (
								<div className="col-md-4" key={key}>
									<WeatherItem {...obj} handleClick={this.handleClick.bind(null, obj)} />
								</div>
							)
						})}
					</div>
				</div>
			)
		}
	},
	render() {
		return (
			<div>
				{this.renderForecast()}
			</div>
		)
	}
});

export default Forecast;