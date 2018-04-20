import React from 'react';
import '../assets/styles/welcome.css'
import logo from '../assets/images/logodte.png'

class Welcome extends React.Component{
   constructor(props){
      super(props)
   }

   render() {
      return (
        <div className="container-fluid expandBlock" onClick={() => this.props.handleRoute('welcome')}>
        <div className="logo txWhite text-center">
            <h2>Welcome to</h2>
            <img src={logo} alt="DTE" />
            <h3>DTE Energy</h3>
            <p>Vendor Timesheet Management</p>
        </div>
        <footer>
          <span className="terms">Terms and Conditions</span>
          <div className="baryellow"></div>
          <div className="bargreen"></div>
          <div className="barorange"></div>
        </footer>
      </div>
      );
   }
}

export default Welcome;
