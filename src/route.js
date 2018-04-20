import React, { Component } from 'react'
import Welcome from './components/Welcome'
import Login from './containers/Login'
import WorkDetail from './containers/WorkDetail'
import EventDetail from './containers/EventDetails'
import CrewMembers from './components/CrewMembers'
import TimeMaterial from './components/TimeMaterial'
import UnitMaterial from './containers/UnitDetails'
import TimeSheetPreview from './components/TimeSheetPreview'
import Dashboard from "./containers/Dashboard";

export default class Routes extends Component {
	constructor(props) {
		super(props)
		this.state = {
			welcomePage: true,
		};
		this.handleRoute = this.handleRoute.bind(this);
	}

	handleRoute(page) {
		if (page === 'welcome') {
			this.setState({
				welcomePage: false,
				loginPage: true,
				crewPage: false,
				workPage: false,
				eventPage: false ,
				memberPage: false,
				timePage: false,
				unitPage:false,
				previewPage:false,
			});
		}

		if (page === 'login') {
			this.setState({ welcomePage: false, loginPage: false, crewPage: true, workPage: false, eventPage: false, memberPage: false, timePage: false, unitPage:false, previewPage: false  });
		}

		if (page === 'crew') {
			this.setState({ welcomePage: false, loginPage: false, crewPage: false, workPage: true, eventPage: false, memberPage: false, timePage: false, unitPage:false, previewPage: false  });
		}

		if (page === 'new') {
			this.setState({ eventIndex: -1, welcomePage: false, loginPage: false, crewPage: false, workPage: true, eventPage: false, memberPage: false, timePage: false, unitPage:false, previewPage: false  });
		}

		if (page === 'work') {
			this.setState({ welcomePage: false, loginPage: false, crewPage: false, workPage: false, eventPage: true, memberPage: false, timePage: false, unitPage:false, previewPage: false  });
		}

		if (page === 'event') {
			this.setState({ welcomePage: false, loginPage: false, crewPage: false, workPage: false, eventPage: false, memberPage: true, timePage: false, unitPage:false, previewPage: false  });
		}

		if (page === 'member') {
			this.setState({ welcomePage: false, loginPage: false, crewPage: false, workPage: false, eventPage: false, memberPage: false, timePage: true, unitPage:false, previewPage: false  });
		}

		if (page === 'time') {
			this.setState({ welcomePage: false, loginPage: false, crewPage: false, workPage: false, eventPage: false, memberPage: false, timePage: false, unitPage:true, previewPage: false  });
		}

		if (page === 'unit') {
			this.setState({ welcomePage: false, loginPage: true, crewPage: false, workPage: false, eventPage: false, memberPage: false, timePage: false, unitPage:false, previewPage: false });
		}

		if (page === 'preview') {
			this.setState({ welcomePage: false, loginPage: false, crewPage: false, workPage: false, eventPage: false, memberPage: false, timePage: false, unitPage:false, previewPage: true });
		}
	}

	render() {
		return (
			<div>
				{ this.state.welcomePage && <Welcome handleRoute={this.handleRoute}/> }
				{ this.state.loginPage && <Login handleRoute={this.handleRoute} /> }
				{ this.state.crewPage && <Dashboard handleRoute={this.handleRoute}/> }
				{ this.state.workPage && <WorkDetail handleRoute={this.handleRoute} eventIndex={this.state.eventIndex}/> }
				{ this.state.eventPage && <EventDetail handleRoute={this.handleRoute}/> }
				{ this.state.memberPage && <CrewMembers handleRoute={this.handleRoute}/> }
				{ this.state.timePage && <TimeMaterial handleRoute={this.handleRoute}/> }
				{ this.state.unitPage && <UnitMaterial handleRoute={this.handleRoute}/> }
				{ this.state.previewPage && <TimeSheetPreview handleRoute={this.handleRoute}/> }
			</div>
		)



	}
}
