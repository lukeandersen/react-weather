import React, {PropTypes} from 'react';
import { Router } from 'react-router';

const SearchForm = React.createClass({
	contextTypes: {
    	router: React.PropTypes.object.isRequired
  	},
	searchWeather(e) {
		e.preventDefault();
		this.context.router.push({
			pathname: `forecast/${this.refs.location.value}`
		});
		this.refs.location.value = '';
	},
	render() {
		return (
			<form onSubmit={this.searchWeather} className={this.props.className}>
				<div className="form-group">
					<input type="text" className="form-control" ref="location" placeholder="Sydney, NSW" />
				</div>
				<div className="form-group">
					<button type="button" className="btn btn-success btn-block">Get Weather</button>
				</div>
			</form>
		)
	}
});

export default SearchForm;