import React from 'react';
import { connect } from 'react-redux';
import { submit, reset } from 'redux-form';
import TimeDetails from '../TimeDetails';
import UnitMaterial from '../../containers/UnitDetails';
import Header from '../../components/Header';
import EventForm from '../../components/AddEvent';
import '../../assets/styles/style.css';
import Footer from '../../components/Footer';
import {
  addEvent,
  addEventId,
  UpdateUnitMaterialInitialValues,
  UpdateUnitDetailInitialValues,
  UpdateUnitMemberInitialValues,
  UpdateTimeMemberInitialValues,
  UpdateTimeMaterialInitialValues,
  UpdateTimeEquipmentInitialValues
} from '../../actions/index';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'unit',
      selectedOpt2: 'event'
    };
  }

  handleOnchangeEvnType(e) {
    const { form, initialValues } = this.props;
    let formId = 'EventForm' + initialValues[0].eventID;
    console.log('formId', formId);
    if (e.target.value === 'UM') {
      form[formId].initial.isUnitBilling = 'UM';
      this.setState({ selectedOption: 'unit' });
    } else if (e.target.value === 'TM') {
      this.setState({ selectedOption: 'time' });
      form[formId].initial.isUnitBilling = 'TM';
    }

    if (e.target.value === 'E') {
      this.setState({ selectedOpt2: 'event' });
      form[formId].initial.eventType = 'E';
    } else if (e.target.value === 'W') {
      this.setState({ selectedOpt2: 'workorder' });
      form[formId].initial.eventType = 'W';
    }
  }

  handleOnchangeEvnTypeText1(e) {
    // e.preventDefault();
    const { form, initialValues } = this.props;
    let formId = 'EventForm' + initialValues[0].eventID;
    form[formId].initial.comments = e.target.value;
  }

  handleOnchangeEvnTypeText2(e) {
    // e.preventDefault();
    const { form, initialValues } = this.props;
    let formId = 'EventForm' + initialValues[0].eventID;
    form[formId].initial.workLocation = e.target.value;
  }
  handleOnchangeEvnTypeText3(e) {
    // e.preventDefault();
    const { form, initialValues } = this.props;
    let formId = 'EventForm' + initialValues[0].eventID;
    form[formId].initial.workDescription = e.target.value;
  }

  updateEvent() {
    const { form, initialValues } = this.props;
    let formId = 'EventForm' + initialValues[0].eventID;
    let eventValue = form[formId].values.eventId;
    console.log('Hello', initialValues);

    let crewEquipmentData = initialValues[0].crewEquipments;
    let crewMemberData = initialValues[0].crewMembers;

    //let check = initialValues[0].isUnitBilling=="TM"? (crewMemberData.length > 1 && crewEquipmentData.length > 1) : true;
    if (
      document.getElementsByClassName('form-control') &&
      document.getElementsByClassName('form-control')[0].value !== '' &&
      !document.getElementsByClassName('form-control')[0].value.match(/\W/) //&& check
    ) {
      this.props.submit(formId);
      this.props.addEventId(eventValue);
      if (form[formId].initial.isUnitBilling === 'UM') {
        let newUnitMaterialForm;
        let newUnitMemberForm;
        let newUnitDetailForm;
        for (var materialFormName in form) {
          if (materialFormName.includes('newUnitMaterialForm')) {
            newUnitMaterialForm = materialFormName;
          }
        }
        for (var memberFormName in form) {
          if (memberFormName.includes('newUnitMemberForm')) {
            newUnitMemberForm = memberFormName;
          }
        }
        for (var detailFormName in form) {
          if (detailFormName.includes('newUnitDetailForm')) {
            newUnitDetailForm = detailFormName;
          }
        }

        if (form[newUnitMaterialForm] && form[newUnitMaterialForm].values) {
          const unitMaterialValues = form[newUnitMaterialForm].values;
          unitMaterialValues.userID = String(parseInt(Math.random() * 9999));
          this.props.UpdateUnitMaterialInitialValues(unitMaterialValues);
        }
        if (form[newUnitDetailForm] && form[newUnitDetailForm].values) {
          const unitDetailValues = form[newUnitDetailForm].values;
          unitDetailValues.userID = String(parseInt(Math.random() * 9999));
          this.props.UpdateUnitDetailInitialValues(unitDetailValues);
        }
        if (form[newUnitMemberForm] && form[newUnitMemberForm].values) {
          const unitMemberValues = form[newUnitMemberForm].values;
          unitMemberValues.userID = String(parseInt(Math.random() * 9999));
          this.props.UpdateUnitMemberInitialValues(unitMemberValues);
        }
      } else {
        let newCrewMemberForm;
        let newCrewMaterialForm;
        let newCrewEquipmentForm;
        for (var crewMemFormName in form) {
          if (crewMemFormName.includes('newCrewMemberForm')) {
            newCrewMemberForm = crewMemFormName;
          }
        }
        for (var crewMatFormName in form) {
          if (crewMatFormName.includes('newCrewMaterialForm')) {
            newCrewMaterialForm = crewMatFormName;
          }
        }
        for (var crewEqpFormName in form) {
          if (crewEqpFormName.includes('newCrewEquipmentForm')) {
            newCrewEquipmentForm = crewEqpFormName;
          }
        }
        if (form[newCrewMemberForm] && form[newCrewMemberForm].values) {
          const timeMemberValues = form[newCrewMemberForm].values;
          this.props.UpdateTimeMemberInitialValues(timeMemberValues);
        }
        if (form[newCrewMaterialForm] && form[newCrewMaterialForm].values) {
          const timeMaterialValues = form[newCrewMaterialForm].values;
          this.props.UpdateTimeMaterialInitialValues(timeMaterialValues);
        }
        if (form[newCrewEquipmentForm] && form[newCrewEquipmentForm].values) {
          const timeEquipmentValues = form[newCrewEquipmentForm].values;
          this.props.UpdateTimeEquipmentInitialValues(timeEquipmentValues);
        }
      }

      this.props.handleRoute('preview');
    }
  }

  addEvent() {
    const { form, initialValues } = this.props;
    let formId = 'EventForm' + initialValues[0].eventID;
    this.props.submit(formId);
    let formNames = [];
    for (var formName in form) {
      if (formName.includes('EventForm')) {
        formNames.push(formName);
      }
    }
    const eventForms = formNames.map(name => form[name].values);
    this.props.addEvent(eventForms);
    this.props.reset(formNames[formId]);
  }
  render() {
    return (
      <div className="container-fluid wrapper p0 mt5">
        {<Header title="Event Details" />}
        <div className="col-xs-12 bgWhite content scrollbarStyle scrollbar">
          <div className="force-overflow">
            {this.props.initialValues.map((eventDetail, index) => {
              const eventForm = `EventForm${eventDetail.eventID}`;
              return (
                <div key={eventForm}>
                  <EventForm
                    label={
                      eventDetail.eventType === 'E'
                        ? 'Event Number'
                        : 'Work Order Number'
                    }
                    onSubmit={this.props.submit}
                    initialValues={eventDetail}
                    eventDetail={eventDetail}
                    addEvent={() => this.addEvent()}
                    form={eventForm}
                    showAddEvent={index == 0}
                    handleOnchangeEvnType={e => this.handleOnchangeEvnType(e)}
                    handleOnchangeEvnType1={e =>
                      this.handleOnchangeEvnTypeText1(e)}
                    handleOnchangeEvnType2={e =>
                      this.handleOnchangeEvnTypeText2(e)}
                    handleOnchangeEvnType3={e =>
                      this.handleOnchangeEvnTypeText3(e)}
                  />
                  <div className="clearfix" />
                  {eventDetail.isUnitBilling === 'UM'
                    ? <UnitMaterial
                        eventDetail={eventDetail}
                        eventIndex={index}
                      />
                    : <TimeDetails
                        eventDetail={eventDetail}
                        handleRoute={this.props.handleRoute}
                        eventIndex={index}
                      />}
                </div>
              );
            })}
          </div>
        </div>

        <ul className="tablinks" role="tablist">
          <span className="tabBar" />
          <li>
            <span className="tabLabel">Work Details</span>
            <span
              className="tabNumber"
              onClick={() => this.props.handleRoute('crew')}
            >
              1
            </span>
          </li>
          <li>
            <span className="tabLabel">Event Details</span>
            <span className="tabNumber active">2</span>
          </li>
          <li onClick={() => this.updateEvent()}>
            <span className="tabLabel">Submit</span>
            <span className="tabNumber">3</span>
          </li>
        </ul>
        <div className="fixedButton">
          <button
            className="btn btn-primary btn-block"
            onClick={() => this.updateEvent()}
            type="button"
          >
            Preview and Submit Timesheet
          </button>
        </div>
        <Footer terms={false} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialValues: state.eventDetail.eventDetails,
    form: state.form
  };
}

export default connect(mapStateToProps, {
  addEvent,
  addEventId,
  submit,
  reset,
  UpdateUnitMaterialInitialValues,
  UpdateUnitDetailInitialValues,
  UpdateUnitMemberInitialValues,
  UpdateTimeMemberInitialValues,
  UpdateTimeMaterialInitialValues,
  UpdateTimeEquipmentInitialValues
})(EventDetail);
