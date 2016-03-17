import React from 'react';
import Axios from 'axios';

const APIKEY = '9124309734c59cc1f944d2b87ee510c8';

const Api = {
	getWeather: (city) => {
		return Axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${APIKEY}&cnt=6`);
	}
};

export default Api;