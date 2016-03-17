import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/main';
import Home from '../components/home';
import Forecast from '../components/forecast';
import Detail from '../components/detail';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="forecast/:city" component={Forecast}></Route>
			<Route path='detail/:city' component={Detail} />
		</Route>
	</Router>
);

export default routes;