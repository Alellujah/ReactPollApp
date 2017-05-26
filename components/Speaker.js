import React from 'react'
import Display from './parts/Display'
import JoinSpeaker from './parts/JoinSpeaker'
import Attendance from './parts/Attendance'
import Questions from './parts/Questions'

class Speaker extends React.Component {
	render() {
		return (
		<div className="row">
			<div className="columns small-12">
				<Display if={this.props.status === 'connected'}>

					<Display if={this.props.member.name && this.props.member.type === 'speaker'}>
						<Questions questions={this.props.questions} emit={this.props.emit} />
						<Attendance audience={this.props.audience} />
					</Display>

					<Display if={!this.props.member.name}>
						<h2>Começar a apresentação</h2>
						<JoinSpeaker emit={this.props.emit} />
					</Display>

				</Display>
			</div>
		</div>
		);
	}
}

module.exports = Speaker;
