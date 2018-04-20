import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputComponent from './FormElements/InputComponent';
import { required } from './validator';

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        className="inputControl"
        placeHolder="username"
        component={InputComponent}
        type="text"
      />
      <Field
        name="password"
        className="inputControl"
        placeHolder="Password"
        component={InputComponent}
        type="password"
      />
      <div className="form-group checkBox pull-right">
        <span className="checkboxSpan">Remember me</span>
        <input type="checkbox" id="remember" className="regular-checkbox" />
        <label htmlFor="remember" />
      </div>
      <div className="spacer5" />
      <div className="btn-block">
        <button type="submit" className="btn col-xs-5 pull-right btn-primary">
          Sign In
        </button>
      </div>
    </form>
  );
};

LoginForm = reduxForm({
  // a unique name for the form
  form: 'loginForm',
})(LoginForm);

export default LoginForm;
