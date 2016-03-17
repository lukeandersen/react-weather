import React from 'react';
import Moment from 'moment';

const Detail = React.createClass({
	getInitialState() {
		return {
			forecast: this.props.location.state.forecast,
			location: this.props.location.state.location
		}
	},
	render() {
		return (
			<div className="container">
				<h3 className="text-center">
					{Moment.unix(this.state.forecast.dt).format("dddd d MMM Y")} <br/><small>{this.state.location}</small>
				</h3>
				<br/>
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<ul className="list-group">
							<li className="list-group-item">Description: {this.state.forecast.weather[0].description}</li>
							<li className="list-group-item">Pressure: {this.state.forecast.pressure}</li>
							<li className="list-group-item">Humidity: {this.state.forecast.humidity}</li>
							<li className="list-group-item">Wind Speed: {this.state.forecast.speed}</li>
							<li className="list-group-item">Wind Deg: {this.state.forecast.deg}</li>
							<li className="list-group-item">Temp (min): {Math.floor(this.state.forecast.temp.min - 273.15)}&deg;C</li>
							<li className="list-group-item">Temp (max): {Math.floor(this.state.forecast.temp.max - 273.15)}&deg;C</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
});

export default Detail;