import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, change } from 'redux-form';
import InputComponent from './FormElements/InputComponent';
import SelectComponent from './FormElements/SelectComponent';
import { required, alphaNumeric, number, maxLength } from './validator';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class WorkDetailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDatePicker: false,
      activateFields: true,
    };
  }

   componentDidMount() {
    if(this.props.form.workDetailForm.values.contractID !== undefined && this.props.form.workDetailForm.values.contractID != ''){
      this.setState({ activateFields: false });
    }
  }

  handleDateClick(e) {
    this.setState({ openDatePicker: true });
  }

  handleDateSelect(date) {
    this.setState({ openDatePicker: false });
    this.props.change('workDetailForm', 'date', this.formatDate(date));
  }

  handleChangeContractId(e) {
    if (e.target.value !== '') {
      this.setState({ activateFields: false });
    } else {
      this.setState({ activateFields: true });
    }
  }

  formatDate(date) {
    var monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex] + ' ' + day + ' ' + year;
  }
  render() {
    const today = new Date();
    return (
      <form onSubmit={this.props.handleSubmit}>
        {this.state.openDatePicker === true ? (
          <InfiniteCalendar
            selected={today}
            displayOptions={{
              showOverlay: true,
            }}
            maxDate={today}
            onSelect={date => this.handleDateSelect(date)}
          />
        ) : (
          ''
        )}
        <Field
          name="date"
          className="form-control"
          placeHolder="Work Date"
          component={InputComponent}
          type="text"
          onFocus={e => this.handleDateClick(e)}
          label="Work Date"
          validate={required}
          disabled={this.state.activateFields}
        />

        <Field
          name="contractID"
          placeHolder="contractIDS"
          onChange={e => this.handleChangeContractId(e)}
          component={SelectComponent}
          options={{
            400004597: '4400004597',
            4400004611: '4400004611',
            4400004610: '4400004610',
            4400004598: '4400004598',
            4400004308: '4400004308',
            4400004305: '4400004305',
            4400004306: '4400004306',
            4400004307: '4400004307',
            4400003296: '4400003296',
            4400005185: '4400005185',
            4400005141: '4400005141',
            4400005139: '4400005139',
            4400005384: '4400005384',
          }}
          label="Contract ID"
          validate={required}
        />

        <Field
          name="serviceCenter"
          placeHolder="Service Center"
          component={SelectComponent}
          options={{
            Travel: 'Travel',
            Planner: 'Planner',
            LAP: 'LAP',
            MAR: 'MAR',
            MTC: 'MTC',
            NAE: 'NAE',
            HWL: 'HWL',
            PON: 'PON',
            SBY: 'SBY',
            CAN: 'CAN',
            RFD: 'RFD',
            ANN: 'ANN',
            NPT: 'NPT',
            WWS: 'WWS',
            TBY: 'TBY',
          }}
          label="Service Center"
          disabled={this.state.activateFields}
          validate={required}
        />

        <Field
          name="workType"
          placeHolder="Work Type"
          component={SelectComponent}
          options={{
            UG: 'UG',
            OH: 'OH',
          }}
          label="Work Type"
          disabled={this.state.activateFields}
          validate={required}
        />

        <Field
          name="poNumber"
          className="form-control"
          placeHolder="PO Number"
          component={InputComponent}
          validate={[number, required]}
          normalize={value => maxLength(value, 10)}
          label=" PO Number"
          validate={number}
          disabled={this.state.activateFields}
        />
        <Field
          name="jtnNumber"
          placeHolder="JTN Number"
          component={SelectComponent}
          options={{
            Travel: 'Travel',
            Planner: 'Planner',
            LAP: 'LAP',
            MAR: 'MAR',
            MTC: 'MTC',
            NAE: 'NAE',
            HWL: 'HWL',
            PON: 'PON',
            SBY: 'SBY',
            CAN: 'CAN',
            RFD: 'RFD',
            ANN: 'ANN',
            NPT: 'NPT',
            WWS: 'WWS',
            TBY: 'TBY',
          }}
          label="JTN Number"
         
          disabled={this.state.activateFields}
        />
        <Field
          name="vendorReferenceNumber"
          className="form-control"
          placeHolder="Vendor reference Number"
          component={InputComponent}
          type="text"
          label="Vendor Reference Number"
          validate={alphaNumeric}
          disabled={this.state.activateFields}
        />
        <div className="clearfix" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
  };
}

WorkDetailForm = connect(mapStateToProps, { change })(WorkDetailForm);

export default reduxForm({
  form: 'workDetailForm', // a unique name for this form
    onSubmitSuccess: (result, dispatch, props) => {
        console.log('ttam');
        props.continueSubmit();
    }
})(WorkDetailForm);
