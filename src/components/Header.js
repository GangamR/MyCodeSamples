import React from 'react';
import logo from '../assets/images/logodteHeader.png';

const Header = (props) => {
	return (
		<header>
			<div className="row">
				<div className="headerLogo">
					<img src={logo} alt="DTE" width="50" height="50"/>
				</div>
				<div className="col-xs-12 text-center">
					<h3>{props.title}</h3>
				</div>
			</div>
		</header>
	);
}

export default Header;
