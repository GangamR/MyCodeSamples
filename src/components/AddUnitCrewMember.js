import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputComponent from './FormElements/InputComponent';
import SelectComponent from './FormElements/SelectComponent';
import { required } from './validator';

let AddUnitCrewMember = props => {
  return (
    <div className="formBlock">
      <div className="formHeader">
        <span className="pull-left">IndirectCode</span>
        {props.editButtons && (
          <span className="pull-right">
            {!props.editMode ? (
              <span
                onClick={props.editMember}
                className="glyphicon glyphicon-pencil mr5 cursor"
              />
            ) : (
              <span
                onClick={props.updateCrewMember}
                className="btn btn-xs btn-success"
              >
                Save
              </span>
            )}
            <span
              onClick={props.deleteMember}
              className="glyphicon cursor glyphicon-trash"
            />
          </span>
        )}
        <div className="clearfix" />
      </div>
      {props.editMode && (
        <form onSubmit={props.handleSubmit}>
          <Field
            name="indirectCode"
            placeHolder="Indirect Code"
            component={SelectComponent}
            options={{
              Crewlead: 'Crewlead',
              Installer: 'Installer',
              Driver: 'Driver',
            }}
            validate={required}
            label="Indirect Code"
          />

          <Field
            name="poleLocNo"
            className="inputControl"
            placeHolder="Pole LOC#"
            component={InputComponent}
            type="text"
            label="Pole LOC#"
          />

          <Field
            name="manCount"
            className="inputControl"
            placeHolder="Man Count"
            component={InputComponent}
            type="text"
            label="Man Count"
          />

          <Field
            name="crewForeman"
            className="inputControl"
            placeHolder="Crew Foreman"
            component={InputComponent}
            type="text"
            label="Crew Foreman"
          />

          <Field
            name="CrewNumber"
            className="inputControl"
            placeHolder="Crew Number"
            component={InputComponent}
            type="text"
            label="Crew Number"
          />

          <Field
            name="crewMinSTOTDT"
            placeHolder="ID"
            component={SelectComponent}
            options={{
              Crewlead: 'Crewlead',
              Installer: 'Installer',
              Driver: 'Driver',
            }}
            validate={required}
            label="Crew Min ST/OT/DT"
          />

          <Field
            name="totalUnits"
            className="inputControl"
            placeHolder="Total Units"
            component={InputComponent}
            type="text"
            label="Total Units"
          />
          <div className="clearfix" />
        </form>
      )}
    </div>
  );
};

AddUnitCrewMember = reduxForm({})(AddUnitCrewMember);

export default AddUnitCrewMember;
