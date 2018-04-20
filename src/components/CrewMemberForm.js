import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputComponent from './FormElements/InputComponent';
import SelectComponent from './FormElements/SelectComponent';
import { number, required } from './validator';

let CrewMemberForm = props => {
  return (
    <form>
      <Field
        name="firstname"
        className="inputControl"
        placeHolder="firstname"
        component={InputComponent}
        type="text"
      />
      <Field
        name="lastname"
        className="inputControl"
        placeHolder="lastname"
        component={InputComponent}
        type="text"
      />
      <Field
        name="EMPID"
        className="inputControl"
        placeHolder="EMP ID"
        component={InputComponent}
        type="text"
      />
      <Field
        name="Masurements"
        placeHolder="Masurements"
        component={SelectComponent}
        options={{
          1: 'Crewlead',
          2: 'Installer',
          3: 'Driver',
        }}
        validate={required}
        label="Crew Role"
      />
      <Field
        name="st"
        placeHolder="S.T"
        component={SelectComponent}
        options={{
          1: '1',
          2: '2',
          3: '3',
        }}
        validate={required}
        label="S.T"
        className="col-xs-4 p0"
      />
      <Field
        name="ot"
        placeHolder="O.T"
        component={SelectComponent}
        options={{
          1: '1',
          2: '2',
          3: '3',
        }}
        validate={required}
        label="O.T"
        className="col-xs-4 p0"
      />
      <Field
        name="hours"
        placeHolder="Hours"
        component={SelectComponent}
        options={{
          1: '1',
          3: '3',
        }}
        validate={required}
        label="Hours"
        className="col-xs-4 p0"
      />
    </form>
  );
};

CrewMemberForm = reduxForm({
  form: 'workDetailForm',
})(CrewMemberForm);

export default CrewMemberForm;
