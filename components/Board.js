var React = require('react');
var Display = require('./parts/Display');
var BarChart = require('react-d3').BarChart;

var Board = React.createClass({

	barGraphData(results) {
		return Object.keys(results).map(function(choice) {
			return {
				label: choice,
				value: results[choice]
			};
		});
	},

	render() {
		return (
			<div className="row">
			<div className="columns small-12">
			<div id="scoreboard margin-top">

				<Display if={this.props.status === 'connected' && this.props.currentQuestion}>
					<BarChart data={this.barGraphData(this.props.results)}
							  title={this.props.currentQuestion.q}
							  height={window.innerHeight * 0.6}
								fill={'#afafaf'}
							  width={window.innerWidth * 0.8} />
								<div id="question-answers">
									{this.props.currentQuestion}
								</div>
					<div>
					</div>
				</Display>

				<Display if={this.props.status === 'connected' && !this.props.currentQuestion}>
					<div className="row">
						<div className="columns small-12">
							<h3>À espera de uma questão</h3>
						</div>
					</div>
				</Display>

			</div>
			</div>
			</div>
		);
	}
});

module.exports = Board;
