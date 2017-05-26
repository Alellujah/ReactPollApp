var React = require('react');
var Display = require('./Display');

var Ask = React.createClass({

	getInitialState() {
		return {
			choices: [],
			answer: undefined
		};
	},

	componentWillMount() {
		this.setUpChoices();
	},

	componentWillReceiveProps() {
		this.setUpChoices();
	},

	setUpChoices() {
		var choices = Object.keys(this.props.question);
		choices.shift();
		this.setState({
			choices: choices,
			answer: sessionStorage.answer
		});
	},

	select(choice) {
		this.setState({ answer: choice });
		sessionStorage.answer = choice;
		this.props.emit('answer', {
			question: this.props.question,
			choice: choice
		});
	},

	addChoiceButton(choice, i) {

		var buttonTypes = ['primary', 'success', 'warning', 'danger'];

		return (
			<button key={i}
			        className={"columns small-12 btn btn-" + buttonTypes[i]}
			        onClick={this.select.bind(null, choice)}>
				{choice}: {this.props.question[choice]}
			</button>
		);
	},

	render() {
		return (
			<div id="currentQuestion">

				<Display if={this.state.answer}>
					<div className="row">
					<div className="columns small-12">
					<h3 className="margin-top">Respondeste: <span className="resposta">{this.state.answer}) - {this.props.question[this.state.answer]}</span></h3>
					<h5 className="next">A próxima questão irá aparecer em breve</h5>
					</div>
					</div>
				</Display>

				<Display if={!this.state.answer}>
				<div className="row">
				<div className="columns small-12">
					<h2>{this.props.question.q}</h2>
				</div>
				</div>
					<div className="row margin-top">
						{this.state.choices.map(this.addChoiceButton)}
					</div>
				</Display>

			</div>
		);
	}

});

module.exports = Ask;
