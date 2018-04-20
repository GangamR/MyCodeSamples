import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputComponent from './FormElements/InputComponent';
import { required, number, alphaNumeric } from './validator';

let EventForm = props => {
  console.log('props propsprops', props);
  return (
    <form onSubmit={props.handleSubmit}>
      {props.showAddEvent && (
        <button
          type="submit"
          className="btn btn-primary pull-right"
          onClick={document.getElementsByClassName('form-control') && document.getElementsByClassName('form-control')[0].value !== '' && !document.getElementsByClassName('form-control')[0].value.match(/\W/) && props.addEvent}
         
        >
          Add Event
        </button>
      )}
      <div className="clearfix" />
      <div className="spacer1" />
      <div className="form-group col-xs-12">
        <Field
          label={props.label}
          name="eventId"
          className="form-control"
          placeHolder={props.label}
          component={InputComponent}
          type="text"
          validate={[required, alphaNumeric]}
        />
      </div>
      <div className="col-xs-12">
        <div className="col-xs-6 p0">
          <div className="form-group">
            <label htmlFor="false">
              <Field
                name="isUnitBilling"
                component="input"
                type="radio"
                value="TM"
                key="TM"
                onChange={props.handleOnchangeEvnType}
              />{' '}
              <span className="checkboxSpan">Time & Material</span>
            </label>
          </div>
        </div>
        <div className="col-xs-6 p0">
          <div className="form-group">
            <label htmlFor="true">
              <Field
                name="isUnitBilling"
                component="input"
                type="radio"
                value="UM"
                key="UM"
                defaultChecked
                onChange={props.handleOnchangeEvnType}
              />{' '}
              <span className="checkboxSpan">Unit Billing</span>
            </label>
          </div>
        </div>
        <div className="clearfix" />
        <div className="col-xs-6 p0">
          <div className="form-group">
            <label htmlFor="E">
              <Field
                name="eventType"
                component="input"
                type="radio"
                value="E"
                key="E"
                onChange={e => props.handleOnchangeEvnType(e)}
              />{' '}
              <span className="checkboxSpan">Event</span>
            </label>
          </div>
        </div>
        <div className="col-xs-6 p0">
          <div className="form-group">
            <label htmlFor="W">
              <Field
                name="eventType"
                component="input"
                type="radio"
                value="W"
                key="W"
                onChange={e => props.handleOnchangeEvnType(e)}
              />{' '}
              <span className="checkboxSpan">Work Order Number</span>
            </label>
          </div>
        </div>
      </div>
      <Field
        name="workLocation"
        key="workLocation"
        className="inputControl"
        placeHolder="Work Location"
        component={InputComponent}
        type="textarea"
        label="Work Location"
        validate={[required, alphaNumeric]}
        onChange={e => props.handleOnchangeEvnType2(e)}
      />
      <Field
        name="workDescription"
        key="workDescription"
        className="inputControl"
        placeHolder="Work Description"
        component={InputComponent}
        type="textarea"
        label="Work Description"
        validate={[required, alphaNumeric]}
        onChange={e => props.handleOnchangeEvnType3(e)}
      />
    </form>
  );
};

EventForm = reduxForm({})(EventForm);

export default EventForm;
