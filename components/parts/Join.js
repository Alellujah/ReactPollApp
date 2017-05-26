var React = require('react');
var Link = require('react-router').Link;

var Join = React.createClass({

	join() {
		var memberName = React.findDOMNode(this.refs.name).value;
		this.props.emit('join', { name: memberName });
	},

	render() {
		return (
			<form action="javascript:void(0)" onSubmit={this.join}>

				<label>Nome</label>
				<input ref="name"
					   className="form-control"
				       placeholder="Coloque o seu nome"
				       required />
				<button className="btn btn-primary">Entrar na sessão</button>
			</form>
		);
	}

});

module.exports = Join;
