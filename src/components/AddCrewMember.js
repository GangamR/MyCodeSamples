import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import InputComponent from './FormElements/InputComponent';
import SelectComponent from './FormElements/SelectComponent';

import { required, totalTime } from './validator';

class AddCrewMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stHours: parseInt(props.initialValues.stHour, 10),
      stMinutes: parseInt(props.initialValues.stMinute, 10),
      otHours: parseInt(props.initialValues.otHour, 10),
      otMinutes: parseInt(props.initialValues.otMinute, 10),
      dtHours: parseInt(props.initialValues.dtHour, 10),
      dtMinutes: parseInt(props.initialValues.dtMinute, 10),
	  calcTotal:'0:0',
	  
    };
    this.calculateTotalHours = this.calculateTotalHours.bind(this);
  }

  onChangeStHours(e) {
    this.setState({ stHours: parseInt(e.target.value, 10) });
	this.setTotal();
  }

  onChangeStMinutes(e) {
    this.setState({ stMinutes: parseInt(e.target.value, 10) });
	this.setTotal();
  }

  onChangeOtHours(e) {
    this.setState({ otHours: parseInt(e.target.value, 10) });
	this.setTotal();
  }

  onChangeOtMinutes(e) {
    this.setState({ otMinutes: parseInt(e.target.value, 10) });
	this.setTotal();
  }

  onChangeDtHours(e) {
    this.setState({ dtHours: parseInt(e.target.value, 10) });
	this.setTotal();
  }

  onChangeDtMinutes(e) {
    this.setState({ dtMinutes: parseInt(e.target.value, 10) });
	this.setTotal();
  }
	setTotal(){
		let self=this;
		setTimeout(function(){self.setState({ calcTotal:self.calculateTotalHours() });},100)
	}	
  calculateTotalHours() {
    const {
      stHours,
      stMinutes,
      otHours,
      otMinutes,
      dtHours,
      dtMinutes,
    } = this.state;
    const totalHours = stHours + otHours + dtHours;
    const totalMinutes = stMinutes + otMinutes + dtMinutes;

    const minutesToHours = Math.floor(Math.abs(totalMinutes) / 60);
    const leftMins = Math.abs(totalMinutes) % 60;

    const totalCount = totalHours + minutesToHours + ':'+ leftMins;
    return totalCount;
  }

  render() {
    const props = this.props;
    return (
      <div className="formBlock">
        <div className="formHeader">
          <span className="pull-left">Crew member</span>
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
		{props.editButtons && (
		<span className="text-danger">
		  {props.totalError ? "Total time is less then time duration" :''}
		</span>
		)}
        {props.editMode && (
          <form onSubmit={props.handleSubmit}>
           <label htmlFor="firstName">firstName</label>
            <Field
              name="firstName"
              className="inputControl"
              placeHolder="firstname"
              component={InputComponent}
              type="text"
            />
             <label htmlFor="lastname">lastname</label>
            <Field
              name="lastName"
              className="inputControl"
              placeHolder="lastname"
              component={InputComponent}
              type="text"
            />
            <label htmlFor="employeeID">employeeID</label>
            <Field
              name="employeeID"
              className="inputControl"
              placeHolder="EMP ID"
              component={InputComponent}
              type="text"
            />
            <Field
              name="role"
              component={SelectComponent}
              options={{
                1: 'Crewlead',
                2: 'Installer',
                3: 'Driver',
              }}
              validate={required}
              label="Crew Role"
            />
            <div className="form-group col-xs-6 p0">
              <label htmlFor="startTime">Start time</label>
              <div className="clearfix" />
              <div className="col-xs-5 p0 timeBlock">
                <label>Hours</label>
                <Field
                  name="startHour"
                  placeHolder="S.T"
                  component={SelectComponent}
                  Selectss= "00"
                  options={{
                    0: '00',
                    1: '01',
                    2: '02',
                    3: '03',
                    4: '04',
                    5: '05',
                    6: '06',
                    7: '07',
                    8: '08',
                    9: '09',
                    10: '10',
                    11: '11',
                    12: '12',
                    13: '13',
                    14: '14',
                    15: '15',
                    16: '16',
                    17: '17',
                    18: '18',
                    19: '19',
                    20: '20',
                    21: '21',
                    22: '22',
                    23: '23',
                    24: '24',
                  }}
                />
              </div>
              <div className="col-xs-5  timeBlock p0">
                <label>Min</label>
                <Field
                  name="startMinutes"
                  component={SelectComponent}
                  options={{
                    0: '00',
                    15: '15',
                    30: '30',
                    45: '45',
                  }}
                />
              </div>
            </div>
            <div className="form-group col-xs-6 p0">
              <label htmlFor="startTime">End time</label>
              <div className="clearfix" />
              <div className="col-xs-5 p0 timeBlock">
                <label>Hours</label>
                <Field
                  name="endHour"
                  placeHolder="E.T"
                  component={SelectComponent}
                  options={{
                    0: '00',
                    1: '01',
                    2: '02',
                    3: '03',
                    4: '04',
                    5: '05',
                    6: '06',
                    7: '07',
                    8: '08',
                    9: '09',
                    10: '10',
                    11: '11',
                    12: '12',
                    13: '13',
                    14: '14',
                    15: '15',
                    16: '16',
                    17: '17',
                    18: '18',
                    19: '19',
                    20: '20',
                    21: '21',
                    22: '22',
                    23: '23',
                    24: '24',
                  }}
                />
              </div>
              <div className="col-xs-5  timeBlock p0">
                <label>Min</label>
                <Field
                  name="endMinutes"
                  component={SelectComponent}
                  options={{
                    0: '00',
                    15: '15',
                    30: '30',
                    45: '45',
                  }}
                />
              </div>
            </div>
            <div className="form-group col-xs-4 p0">
              <label htmlFor="startTime">S.T.</label>
              <div className="clearfix" />
              <div className="col-xs-5 p0 timeBlock">
                <label>Hours</label>
                <Field
                  name="stHour"
                  onChange={e => this.onChangeStHours(e)}
                  component={SelectComponent}
                  options={{
                    0: '00',
                    1: '01',
                    2: '02',
                    3: '03',
                    4: '04',
                    5: '05',
                    6: '06',
                    7: '07',
                    8: '08',
                    9: '09',
                    10: '10',
                    11: '11',
                    12: '12',
                    13: '13',
                    14: '14',
                    15: '15',
                    16: '16',
                    17: '17',
                    18: '18',
                    19: '19',
                    20: '20',
                    21: '21',
                    22: '22',
                    23: '23',
                    24: '24',
                  }}
                />
              </div>
              <div className="col-xs-5 timeBlock p0">
                <label>Min</label>
                <Field
                  name="stMinute"
                  onChange={e => this.onChangeStMinutes(e)}
                  component={SelectComponent}
                  options={{
                    0: '00',
                    15: '15',
                    30: '30',
                    45: '45',
                  }}
                />
              </div>
            </div>
            <div className="form-group col-xs-4 p0">
              <label htmlFor="startTime">O.T.</label>
              <div className="clearfix" />
              <div className="col-xs-5 p0 timeBlock">
                <label>Hours</label>
                <Field
                  name="otHour"
                  onChange={e => this.onChangeOtHours(e)}
                  component={SelectComponent}
                  options={{
                    0: '00',
                    1: '01',
                    2: '02',
                    3: '03',
                    4: '04',
                    5: '05',
                    6: '06',
                    7: '07',
                    8: '08',
                    9: '09',
                    10: '10',
                    11: '11',
                    12: '12',
                    13: '13',
                    14: '14',
                    15: '15',
                    16: '16',
                    17: '17',
                    18: '18',
                    19: '19',
                    20: '20',
                    21: '21',
                    22: '22',
                    23: '23',
                    24: '24',
                  }}
                />
              </div>
              <div className="col-xs-5  timeBlock p0">
                <label>Min</label>
                <Field
                  name="otMinute"
                  onChange={e => this.onChangeOtMinutes(e)}
                  component={SelectComponent}
                  options={{
                    0: '00',
                    15: '15',
                    30: '30',
                    45: '45',
                  }}
                />
              </div>
            </div>
            <div className="form-group col-xs-4 p0">
              <label htmlFor="startTime">D.T.</label>
              <div className="clearfix" />
              <div className="col-xs-5 p0 timeBlock">
                <label>Hours</label>
                <Field
                  name="dtHour"
                  onChange={e => this.onChangeDtHours(e)}
                  component={SelectComponent}
                  options={{
                    0: '00',
                    1: '01',
                    2: '02',
                    3: '03',
                    4: '04',
                    5: '05',
                    6: '06',
                    7: '07',
                    8: '08',
                    9: '09',
                    10: '10',
                    11: '11',
                    12: '12',
                    13: '13',
                    14: '14',
                    15: '15',
                    16: '16',
                    17: '17',
                    18: '18',
                    19: '19',
                    20: '20',
                    21: '21',
                    22: '22',
                    23: '23',
                    24: '24',
                  }}
                />
              </div>
              <div className="col-xs-5  timeBlock p0">
                <label>Min</label>
                <Field
                  name="dtMinute"
                  onChange={e => this.onChangeDtMinutes(e)}
                  component={SelectComponent}
                  options={{
                    0: '00',
                    15: '15',
                    30: '30',
                    45: '45',
                  }}
                />
              </div>
            </div>
            <div className="clearfix" />
            <div className="col-xs-5 p0">
              <div className="col-xs-10 p0">
                <label>Total hour</label>
                <span className="form-control" id="totalReset">
                  {!this.props.editMode ? this.state.calcTotal : this.calculateTotalHours()}
                </span>
              </div>
            </div>
            <div className="col-xs-5 p0">
              <Field
                name="meals"
                placeHolder="meals"
                component={SelectComponent}
                options={{
                  0: '00',
                  1: '01',
                  2: '02',
                  3: '03',
                  4: '04',
                  5: '05',
                  6: '06',
                  7: '07',
                  8: '08',
                  9: '09',
                }}
                label="meals"
                className="col-xs-6 p0"
              />
            </div>
			
            <div className="clearfix spacer1" />
          </form>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
  };
}

AddCrewMember = connect(mapStateToProps)(AddCrewMember);

export default (AddCrewMember = reduxForm({})(AddCrewMember));
