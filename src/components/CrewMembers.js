import React from 'react';
import '../assets/styles/style.css';

const CrewMembers = (props) => (
	<div className="container-fluid wrapper crewDetails p0 mt5" onClick={()=> props.handleRoute('member')}>
		<header>
			<div className="row">
				<div className="headerLogo">
					<p>Logo</p>
				</div>
				<div className="col-xs-12 text-center">
					<h3>Event Details</h3></div>
			</div>
		</header>
		<div className="col-xs-12 bgWhite content">
			<div className="formHeader">Crew Lead details</div>
			<div className="listView">
				<div className="formHeader">
					<span className="pull-left">Crew Member 1</span>
					<span className="pull-right">R</span>
					<div className="clearfix"></div>
				</div>
			</div>
			<div className="formBlock">
				<div className="formHeader">Crew Member</div>
				<form>
					<div className="form-group">
						<input type="text" placeHolder="firstname" className="form-control" />
					</div>
					<div className="form-group">
						<input type="text" placeHolder="lastname" className="form-control" />
					</div>
					<div className="form-group">
						<input type="text" placeHolder="EMP ID" className="form-control" />
					</div>
					<div className="form-group">
						{/*
                    <label htmlFor="time">
                        Add favorite
                        <input type="checkbox" />
                    </label>*/}
						<select className="form-control">
							<option value="">Select Crew Role</option>
							<option value="1">Crewlead</option>
							<option value="1">Installer</option>
							<option value="1">Driver</option>
						</select>
					</div>
				</form>
				<button className="btn btn-primary btn-block textRight">Add member +</button>
				<div className="clearfix"></div>
			</div>
		</div>
		<ul className="tablinks" role="tablist">
			<span className="tabBar"></span>
			<li>
				<span className="tabLabel">Work Details</span>
				<span className="tabNumber">1</span>
			</li>
			<li>
				<span className="tabLabel">Event Details</span>
				<span className="tabNumber active">2</span>
			</li>
			<li>
				<span className="tabLabel">Submit</span>
				<span className="tabNumber">3</span>
			</li>
		</ul>
		<div className="fixedButton">
			<button className="btn btn-primary btn-block">Preview and Submit Timesheet</button>
		</div>
		<footer>
			<div className="baryellow"></div>
			<div className="bargreen"></div>
			<div className="barorange"></div>
		</footer>
	</div>
);

export default CrewMembers;
