import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputComponent from './FormElements/InputComponent';
import SelectComponent from './FormElements/SelectComponent';
import { number, required } from './validator';

let AddMaterial = props => {
  return (
    <div className="formBlock">
      <div className="formHeader">
        <span className="pull-left">Materials</span>
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
          <div className="col-xs-12">
            <Field
              name="name"
              placeHolder="Name"
              component={SelectComponent}
              options={{
                1: 'E.A',
                2: 'liner feet',
                3: 'sq.feet',
              }}
              validate={required}
              label="Name"
            />
          </div>
          <div className="col-xs-6">
            <Field
              name="unSiz"
              placeHolder="UnSiz"
              component={SelectComponent}
              options={{
                1: 'E.A',
                2: 'liner feet',
                3: 'sq.feet',
              }}
              validate={required}
              label="UnSiz"
            />
          </div>
          <div className="col-xs-6">
            <Field
              name="quantity"
              className="inputControl"
              placeHolder="Quantity"
              component={InputComponent}
              type="text"
              validate={number}
              label="Quantity"
            />
          </div>
          <div className="clearfix" />
        </form>
      )}
    </div>
  );
};

AddMaterial = reduxForm({})(AddMaterial);

export default AddMaterial;
