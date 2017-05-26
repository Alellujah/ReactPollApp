var React = require('react');

var Attendance = React.createClass({

	addMemberRow(member, i) {
		return (
			<tr key={i}>
				<td>{member.id}</td>
			</tr>
		);
	},

	render() {
		return (
			<div className="row margin-top" id="memberslive">
				<div className="columns small-12">
					<h2>Ligados - {this.props.audience.length}</h2>
					<table className="table table-stripped">
						<thead>
							<tr>
								<th>Membros da Audiência</th>
								<th>Socket ID</th>
							</tr>
						</thead>
						<tbody>

							{this.props.audience.map(this.addMemberRow)}

						</tbody>
					</table>
				</div>
			</div>
		);
	}
});

module.exports = Attendance;
