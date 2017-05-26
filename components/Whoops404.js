var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Whoops404 = React.createClass({
	render() {
		return (
			<div id="not-found">
				<h1>Whoops...</h1>
				<p>Não encontramos a página,
				  Estás à procura de alguma destas: </p>

				<Link to="/">Juntar à sessão</Link>
				<Link to="/speaker">Apresentador</Link>
				<Link to="/board">Ver o gráfico</Link>

			</div>
		);
	}
});

module.exports = Whoops404;
