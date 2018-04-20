import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import SelectComponent from './FormElements/SelectComponent';
import { required } from './validator';

class AddEquipment extends Component {
  constructor(props) {
    super(props);
	
	this.state = {
	  stHours: parseInt(props.initialValues.stHour, 10),
	  stMinutes: parseInt(props.initialValues.stMinute, 10),
	  otHours: parseInt(props.initialValues.otHour, 10),
	  otMinutes: parseInt(props.initialValues.otMinute, 10),
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
  
	setTotal(){
		let self=this;
		setTimeout(function(){self.setState({ calcTotal:self.calculateTotalHours() });},100)
	}
  calculateTotalHours() {
    const { stHours, stMinutes, otHours, otMinutes } = this.state;
    const totalHours = stHours + otHours;
    const totalMinutes = stMinutes + otMinutes;

    const minutesToHours = Math.floor(Math.abs(totalMinutes) / 60);
    const leftMins = Math.abs(totalMinutes) % 60;

    const totalCount = totalHours + minutesToHours + ':' + leftMins;
    return totalCount;
  }
  render() {
    return (
      <div className="formBlock">
        <div className="formHeader">
          <span className="pull-left">Equipment</span>
          {this.props.editButtons && (
            <span className="pull-right">
              {!this.props.editMode ? (
                <span
                  onClick={this.props.editMember}
                  className="glyphicon glyphicon-pencil mr5 cursor"
                />
              ) : (
                <span
                  onClick={this.props.updateMember}
                  className="btn btn-xs btn-success"
                >
                  Save
                </span>
              )}
              <span
                onClick={this.props.deleteMember}
                className="glyphicon cursor glyphicon-trash"
              />
            </span>
          )}
          <div className="clearfix" />
        </div>
        {this.props.editButtons && (
          <span className="text-danger">
            {this.props.totalEquError
              ? 'Total time is less then time duration'
              : ''}
          </span>
        )}
        {this.props.editMode && (
          <form>
            <div className="col-xs-12">
              <Field
                name="equipment"
                component={SelectComponent}
                options={{
                  Crewlead: 'Crewlead',
                  Installer: 'Installer',
                  Driver: 'Driver',
                }}
                validate={required}
                label="Equipment"
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
                      1: '15',
                      2: '30',
                      3: '45',
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
                    name="endHours"
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
                      1: '15',
                      2: '30',
                      3: '45',
                    }}
                  />
                </div>
              </div>
              <div className="form-group col-xs-6 p0">
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
                <div className="col-xs-5  timeBlock p0">
                  <label>Min</label>
                  <Field
                    name="stMinute"
                    component={SelectComponent}
                    onChange={e => this.onChangeStMinutes(e)}
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

              <div className="col-xs-4 p0">
                <label>Total hour</label>
                <span className="form-control" id="totalEquReset">
                  {this.calculateTotalHours()}
                </span>
              </div>
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

AddEquipment = connect(mapStateToProps)(AddEquipment);

export default (AddEquipment = reduxForm({})(AddEquipment));
