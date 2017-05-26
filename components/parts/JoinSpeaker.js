var React = require('react');

var JoinSpeaker = React.createClass({

	start() {
		var speakerName = React.findDOMNode(this.refs.name).value;
		var title = React.findDOMNode(this.refs.title).value;
		this.props.emit('start', { name: speakerName, title: title });
	},

	render() {
		return (
			<form action="javascript:void(0)" onSubmit={this.start}>

				<label>Nome</label>
				<input ref="name"
					   className="form-control"
				       placeholder="Coloque o seu nome"
				       required />

				<label>Título da apresentação</label>
				<input ref="title"
					   className="form-control"
				       placeholder="Titulo da apresentação"
				       required />

				<button className="btn btn-primary">Entrar</button>

			</form>
		);
	}

});

module.exports = JoinSpeaker;
