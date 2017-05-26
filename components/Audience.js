var React = require('react');
var Display = require('./parts/Display');
var Ask = require('./parts/Ask');

var Audience = React.createClass({
	render() {
		return (
			<div className="columns small-12" id="mobile">
				<Display if={this.props.status === 'connected'}>


						<Display if={!this.props.currentQuestion}>
							<div className="row">
								<div className="columns small-12">
									<h2>Bem vindo {this.props.member.name}</h2>
									<h5 className="next">Em breve irá puder participar em tempo real na sessão.</h5>
								</div>
							</div>
						</Display>

						<div className="columns small-12">
							<Display if={this.props.currentQuestion}>
								<Ask question={this.props.currentQuestion} emit={this.props.emit} />
							</Display>
						</div>

					</Display>


			</div>
		);
	}
});


module.exports = Audience;
