var React = require('react');

var Questions = React.createClass({

	ask(question) {
		this.props.emit('ask', question);
	},

	addQuestion(question, i) {
		return (
			<div key={i} className="columns small-12">
				<span onClick={this.ask.bind(null, question)}>{question.q}</span>
			</div>
		);
	},

	render() {
		return (
			<div id="questions" className="row">
				<div className="columns small-12">
					<h2>Questões</h2>
					{this.props.questions.map(this.addQuestion)}
				</div>
			</div>
		);
	}
});

module.exports = Questions;
