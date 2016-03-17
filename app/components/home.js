import React from 'react';
import { Router } from 'react-router';
import SearchForm from '../components/search';

const styles = {
	maxWidth: '440px',
	margin: '10em auto',
	padding: '.5em 1em 1em'
};

const Home = React.createClass({
	render() {
		return (
			<div style={styles} className="panel panel-default">
				<div className="panel-body">
					<h2>Enter a city and state</h2>
					<SearchForm />
				</div>
			</div>
		)
	}
});

export default Home;