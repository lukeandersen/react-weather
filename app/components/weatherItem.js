import React, {PropTypes} from 'react';
import Moment from 'moment';
import Detail from '../components/detail';

const WeatherItem = ({dt, weather, temp, handleClick}) => {
	return (
		<div className="panel panel-default">
			<div className="panel-body">
				<p>{Moment.unix(dt).format("dddd")}</p>
				<p className="h6"><span className="text-muted">Status: </span>{weather[0].description}</p>
				<p>
					<span className="text-muted h6">Temp: </span>
					<span className="h6">
						{Math.floor(temp.min - 273.15)}&deg;C - 
						{Math.floor(temp.max - 273.15)}&deg;C
					</span>
				</p>
				<a href onClick={handleClick}>More...</a>
			</div>
		</div>
	);
};

export default WeatherItem;