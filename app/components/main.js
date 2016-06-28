import React from 'react';
import SearchForm from '../components/search';
import styles from '../styles/main.css';

const Main = React.createClass({
	render() {
		return (
			<div>
				<nav className="navbar navbar-default navbar-static-top">
				  <div className={styles.container}>
				    <div className="navbar-header">
				      <a className="navbar-brand" href="#"><strong>MyWeather</strong></a>
				    </div>
				    <SearchForm className="navbar-form navbar-right" />
				  </div>
				</nav>
				{this.props.children}
			</div>
		)
	}
});

export default Main;