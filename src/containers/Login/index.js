import React from 'react';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';
import '../../assets/styles/style.css'
import '../../assets/styles/global.css'
import logo from '../../assets/images/logodte.png'

class Login extends React.Component{
   constructor(props){
      super(props)
   }

    submit = values => {
        console.log(values)
        this.props.handleRoute('login');
    }

   render() {
      return (
        <div className="container-fluid loginBlock">
            <div className="userLogo text-center">
                <img src={logo} alt="DTE" />
            </div>
            <LoginForm onSubmit={this.submit}/>
            <Footer term={true} />
        </div>
      );
   }
}

export default Login;

