import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputComponent from './FormElements/InputComponent';
import SelectComponent from './FormElements/SelectComponent';

let UnitMaterial = props => {
  return (
    <div className="formBlock">
      <div className="formHeader">
        <span className="pull-left">Unit Details</span>
        {props.editButtons && (
          <span className="pull-right">
            {!props.editMode ? <span
              onClick={props.editMember}
              className="glyphicon glyphicon-pencil mr5 cursor"
            /> : <span
                onClick={props.updateMember} className="btn btn-xs btn-success">Save</span>
            }
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
            name="name"
            placeHolder="Unit Name"
            component={SelectComponent}
            options={{
              LAP: 'LAP',
              MAR: 'MAR',
            }}
            label="Unit ID"
          />
          <div className="clearfix" />

          <Field
            name="totalUnits"
            className="inputControl"
            placeHolder="Total Units"
            component={InputComponent}
            type="text"
            label="Total Units"
          />
        </form>
      )}
    </div>
  );
};

UnitMaterial = reduxForm({})(UnitMaterial);

export default UnitMaterial;
