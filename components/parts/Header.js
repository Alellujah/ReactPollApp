import React from 'react'

class Header extends React.Component {
	render() {
		return (
			<header className="row">
				<div className="columns small-10">
					<h1>Resultados H1</h1>
					<p className="lightgrey"><span id="connection-status" className={this.props.status}></span>Orador - {this.props.speaker}</p>
				</div>
				<div className="columns small-2">
					<img src="logo.svg" />
				</div>
			</header>
		);
	}
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired
};

Header.defaultProps = {
	status: 'disconnected'
};

module.exports = Header;
