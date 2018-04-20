import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/style.css';
import Header from './Header';
import { submitTimeSheet } from '../actions/index';

class TimeSheetPreview extends Component {
  crewMemberDetail(item) {
    {
      return item.map((subItem, i) => {
        if (
          subItem.firstName === '' &&
          subItem.lastName === '' &&
          subItem.startHour === '0' &&
          subItem.startMinutes === '0' &&
          subItem.endHour === '0' &&
          subItem.endMinutes === '0' &&
          subItem.stHour === '0' &&
          subItem.stMinute === '0' &&
          subItem.otHour === '0' &&
          subItem.otMinute === '0' &&
          subItem.dtHour === '0' &&
          subItem.dtMinute === '0' &&
          subItem.meals === '0'
        ) {
          return null;
        }
        let crewRole = '';
        if (subItem.role === '1') {
          crewRole = 'Crewlead';
        } else if (subItem.role === '2') {
          crewRole = 'Installer';
        } else if (subItem.role === '3') {
          crewRole = 'Driver';
        } else {
          crewRole = '';
        }

        const tHrs =
          parseInt(subItem.stHour, 10) +
          parseInt(subItem.otHour, 10) +
          parseInt(subItem.dtHour, 10);

        const tMins =
          parseInt(subItem.stMinute, 10) +
          parseInt(subItem.otMinute, 10) +
          parseInt(subItem.dtMinute, 10);

        const minutesToHours = Math.floor(Math.abs(tMins) / 60);
        const leftMins = Math.abs(tMins) % 60;

        return (
          <tr key={i}>
            <td>
              {subItem.firstName} {subItem.lastName}
            </td>
            <td>
              {crewRole}
            </td>
            <td>
              {subItem.employeeID}
            </td>
            <td>
              {subItem.startHour}:{subItem.startMinutes}
            </td>
            <td>
              {subItem.endHour}:{subItem.endMinutes}
            </td>
            <td>
              {subItem.stHour}:{subItem.stMinute}
            </td>
            <td>
              {subItem.otHour}:{subItem.otMinute}
            </td>
            <td>
              {subItem.dtHour}:{subItem.dtMinute}
            </td>
            <td>
              {tHrs + minutesToHours} : {leftMins}
            </td>
            <td>
              {subItem.meals}
            </td>
          </tr>
        );
      });
    }
  }

  crewMaterialDetail(item) {
    {
      return item.map((subItem, i) => {
        if (
          subItem.materialID === '' &&
          subItem.desc === '' &&
          subItem.quantity === '' &&
          subItem.matUnsiz === '0'
        ) {
          return null;
        }
        let materialName = '';
        let materialUnSiz = '';
        if (subItem.name === '1') {
          materialName = 'E.A';
        } else if (subItem.name === '2') {
          materialName = 'liner feet';
        } else if (subItem.name === '3') {
          materialName = 'sq.feet';
        } else {
          materialName = '';
        }

        if (subItem.unSiz === '1') {
          materialUnSiz = 'E.A';
        } else if (subItem.unSiz === '2') {
          materialUnSiz = 'liner feet';
        } else if (subItem.unSiz === '3') {
          materialUnSiz = 'sq.feet';
        } else {
          materialUnSiz = '';
        }
        return (
          <tr key={i}>
            <td>
              {materialName}
            </td>
            <td>
              {materialUnSiz}
            </td>
            <td>
              {subItem.quantity}
            </td>
          </tr>
        );
      });
    }
  }

  checkUnitMaterial(items) {
    if (
      items.length === 1 &&
      items[0].name === '' &&
      items[0].quantity === '' &&
      items[0].unSiz === ''
    ) {
      return false;
    } else {
      return true;
    }
  }

  checkUnitDetail(items) {
    if (
      items.length === 1 &&
      items[0].totalUnits === '' &&
      items[0].name === ''
    ) {
      return false;
    } else {
      return true;
    }
  }

  checkUnitMember(items) {
    if (
      items.length === 1 &&
      items[0].indirectCode === '' &&
      items[0].poleLocNo === '' &&
      items[0].manCount === '' &&
      items[0].crewForeman === '' &&
      items[0].crewNumber === '' &&
      items[0].crewMinSTOTDT === '' &&
      items[0].totalUnits === ''
    ) {
      return false;
    } else {
      return true;
    }
  }

  checkCrewMember(items) {
    if (
      items.length === 1 &&
      items[0].crewPKId === '' &&
      items[0].firstName === '' &&
      items[0].lastName === '' &&
      items[0].startHour === '0' &&
      items[0].startMinutes === '0' &&
      items[0].endHour === '0' &&
      items[0].endMinutes === '0' &&
      items[0].stHour === '0' &&
      items[0].otHour === '0' &&
      items[0].dtHour === '0' &&
      items[0].stMinute === '0' &&
      items[0].otMinute === '0' &&
      items[0].dtMinute === '0' &&
      items[0].meals === '0' &&
      items[0].role === '' &&
      items[0].desc === '' &&
      items[0].employID === ''
    ) {
      return false;
    } else {
      return true;
    }
  }

  checkCrewMaterial(items) {
    if (
      items.length === 1 &&
      items[0].materialID === '' &&
      items[0].desc === '' &&
      items[0].materialPKId === '' &&
      items[0].quantity === '' &&
      items[0].matUnsiz === ''
    ) {
      return false;
    } else {
      return true;
    }
  }

  checkCrewEquipment(items) {
    if (
      items.length === 1 &&
      items[0].equipmentID === '' &&
      items[0].desc === '' &&
      items[0].equipmentPKId === '' &&
      items[0].startHour === '0' &&
      items[0].startMinutes === '0' &&
      items[0].endHours === '0' &&
      items[0].endMinutes === '0' &&
      items[0].stHour === '0' &&
      items[0].stMinute === '0' &&
      items[0].otHour === '0' &&
      items[0].otMinute === '0'
    ) {
      return false;
    } else {
      return true;
    }
  }

  unitMaterialDetail(item) {
    {
      return item.map((subItem, i) => {
        if (
          subItem.name === '' &&
          subItem.quantity === '' &&
          subItem.unSiz === ''
        ) {
          return null;
        }
        let materialName = '';
        let materialUnSiz = '';
        if (subItem.name === '1') {
          materialName = 'E.A';
        } else if (subItem.name === '2') {
          materialName = 'liner feet';
        } else if (subItem.name === '3') {
          materialName = 'sq.feet';
        } else {
          materialName = '';
        }

        if (subItem.unSiz === '1') {
          materialUnSiz = 'E.A';
        } else if (subItem.unSiz === '2') {
          materialUnSiz = 'liner feet';
        } else if (subItem.unSiz === '3') {
          materialUnSiz = 'sq.feet';
        } else {
          materialUnSiz = '';
        }
        return (
          <tr key={i}>
            <td>
              {materialName}
            </td>
            <td>
              {materialUnSiz}
            </td>
            <td>
              {subItem.quantity}
            </td>
          </tr>
        );
      });
    }
  }

  crewEquipmentDetail(item) {
    {
      return item.map((subItem, i) => {
        if (
          subItem.equipmentID === '' &&
          subItem.desc === '' &&
          subItem.equipmentPKId === '' &&
          subItem.startHour === '0' &&
          subItem.startMinutes === '0' &&
          subItem.endHours === '0' &&
          subItem.endMinutes === '0' &&
          subItem.stHour === '0' &&
          subItem.stMinute === '0' &&
          subItem.otHour === '0' &&
          subItem.otMinute === '0'
        ) {
          return null;
        }
        const tHrs =
          parseInt(subItem.stHour, 10) + parseInt(subItem.otHour, 10);

        const tMins =
          parseInt(subItem.stMinute, 10) + parseInt(subItem.otMinute, 10);

        const minutesToHours = Math.floor(Math.abs(tMins) / 60);
        const leftMins = Math.abs(tMins) % 60;
        return (
          <tr key={i}>
            <td>
              {subItem.equipment}
            </td>
            <td>
              {subItem.startHour}:{subItem.startMinutes}
              {subItem.startHour === ''
                ? subItem.startMinutes + '00'
                : subItem.startMinutes}
            </td>
            <td>
              {subItem.endHours}:{subItem.endMinutes}
            </td>
            <td>
              {subItem.stHour}:{subItem.stMinute}
            </td>
            <td>
              {subItem.otHour}:{subItem.otMinute}
            </td>
            <td>
              {tHrs + minutesToHours} : {leftMins}
            </td>
          </tr>
        );
      });
    }
  }

  unitDetail(item) {
    {
      return item.map((subItem, i) => {
        if (subItem.name === '' && subItem.totalUnits === '') {
          return null;
        }
        return (
          <tr key={i}>
            <td>
              {subItem.name}
            </td>
            <td>
              {subItem.totalUnits}
            </td>
          </tr>
        );
      });
    }
  }

  unitMember(item) {
    {
      return item.map((subItem, i) => {
        if (
          subItem.indirectCode === '' &&
          subItem.poleLocNo === '' &&
          subItem.manCount === '' &&
          subItem.crewForeman === '' &&
          subItem.CrewNumber === '' &&
          subItem.crewMinSTOTDT === '' &&
          subItem.totalUnits === ''
        ) {
          return null;
        }
        return (
          <tr key={i}>
            <td>
              {subItem.indirectCode}
            </td>
            <td>
              {subItem.poleLocNo}
            </td>
            <td>
              {subItem.manCount}
            </td>
            <td>
              {subItem.crewForeman}
            </td>
            <td>
              {subItem.CrewNumber}
            </td>
            <td>
              {subItem.crewMinSTOTDT}
            </td>
            <td>
              {subItem.totalUnits}
            </td>
          </tr>
        );
      });
    }
  }

  render() {
    const { workDetail, eventDetails, eventDetail } = this.props;
    console.log('workDetail', workDetail);
    console.log('eventDetails', eventDetails);
    return (
      <div className="container-fluid wrapper timeSheetPreview p0 mt4-4">
        {<Header title="Time Sheet Preview" />}
        <div className="bgWhite content preview col-xs-12  scrollbar scrollbarStyle">
          <div className="force-overflow">
            <div className="previewHeader text-center txWhite">
              Work details
            </div>
            <div className="previewBody timesheet-preview-work-details">
              <div className="col-xs-6">
                <p>Work Date</p>
                <p>Contract ID</p>
                <p>Service Center</p>
                <p>Work Type</p>
                <p>PO Number</p>
                <p>JTN Number</p>
                <p>Vendor reference Number</p>
              </div>
              <div className="col-xs-6">
                <p>
                  {workDetail.date}
                </p>
                <p>
                  {workDetail.contractID}
                </p>
                <p>
                  {workDetail.serviceCenter}
                </p>
                <p>
                  {workDetail.workType}
                </p>
                <p>
                  {workDetail.poNumber}
                </p>
                <p>
                  {workDetail.jtnNumber}
                </p>
                <p>
                  {workDetail.vendorReferenceNumber}
                </p>
              </div>
              <div className="clearfix" />
            </div>
            <div className="spacer2" />
            {eventDetails.map((item, index) => {
              return (
                <div key={index}>
                  <div className="previewHeader text-center txWhite">
                    {item.eventType === 'E' ? 'Event' : 'Work Order'}{' '}
                    {item.eventId}
                  </div>
                  <div className="col-xs-6 ">
                    <p>Work Location</p>
                    <p>Work Description</p>
                  </div>
                  <div className="col-xs-6">
                    <p>
                      {item.workLocation}
                    </p>
                    <p>
                      {item.workDescription}
                    </p>
                  </div>
                  <div className="clearfix" />
                  {this.checkUnitMaterial(item.unitMaterials) &&
                    <div className="previewBody">
                      <fieldset>
                        <legend>Unit Billing</legend>
                        <p className="txGreen">Unit Materials</p>
                        <div className="col-xs-12 p0 overflow">
                          <table className="table table-responsive table-bordered">
                            <thead>
                              <tr>
                                <td>Name</td>
                                <td>UnSiz</td>
                                <td>Quantity</td>
                              </tr>
                            </thead>
                            <tbody>
                              {this.unitMaterialDetail(item.unitMaterials)}
                            </tbody>
                          </table>
                        </div>
                        <div className="clearfix" />
                      </fieldset>
                    </div>}
                  {this.checkUnitDetail(item.unitDetails) &&
                    <div className="previewBody">
                      <fieldset>
                        <legend>Unit Details</legend>
                        <table className="table table-responsive table-bordered">
                          <thead>
                            <tr>
                              <td>UnitID</td>
                              <td>Totalunits</td>
                            </tr>
                          </thead>
                          <tbody>
                            {this.unitDetail(item.unitDetails)}
                          </tbody>
                        </table>
                        <div className="clearfix" />
                      </fieldset>
                    </div>}
                  {this.checkUnitMember(item.unitMembers) &&
                    <div className="previewBody">
                      <fieldset>
                        <legend>Unit Members</legend>
                        <div className="col-xs-12 p0 overflow">
                          <table className="table table-responsive table-bordered">
                            <thead>
                              <tr>
                                <td>Indirectcode</td>
                                <td>Pole LOC#</td>
                                <td>Man count</td>
                                <td>Crew foreman</td>
                                <td>Crew number</td>
                                <td>crew MinSTOTDT</td>
                                <td>Total units</td>
                              </tr>
                            </thead>
                            <tbody>
                              {this.unitMember(item.unitMembers)}
                            </tbody>
                          </table>
                        </div>
                        <div className="clearfix" />
                      </fieldset>
                    </div>}
                  {this.checkCrewMember(item.crewMembers) &&
                    <div className="previewBody">
                      <fieldset>
                        <legend>Crew Details</legend>
                        <p className="txGreen">Crew Member</p>
                        <div className="col-xs-12 p0 overflow">
                          <table className="table table-responsive table-bordered">
                            <thead>
                              <tr>
                                <td>Name</td>
                                <td>Role</td>
                                <td>Employee Id</td>
                                <td>Start hours</td>
                                <td>End Hours</td>
                                <td>S.T.</td>
                                <td>O.T.</td>
                                <td>D.T.</td>
                                <td>Total hours</td>
                                <td>Meals</td>
                              </tr>
                            </thead>
                            <tbody>
                              {this.crewMemberDetail(item.crewMembers)}
                            </tbody>
                          </table>
                        </div>
                        <div className="clearfix" />
                      </fieldset>
                    </div>}
                  {this.checkCrewMaterial(item.crewMaterials) &&
                    <div className="previewBody">
                      <fieldset>
                        <legend>Metarial Details</legend>
                        <table className="table table-responsive table-bordered">
                          <thead>
                            <tr>
                              <td>Name</td>
                              <td>UnSiz</td>
                              <td>Quantity</td>
                            </tr>
                          </thead>
                          <tbody>
                            {this.crewMaterialDetail(item.crewMaterials)}
                          </tbody>
                        </table>
                        <div className="clearfix" />
                      </fieldset>
                    </div>}
                  {this.checkCrewEquipment(item.crewEquipments) &&
                    <div className="previewBody">
                      <fieldset>
                        <legend>Equipment Details</legend>
                        <div className="col-xs-12 p0 overflow">
                          <table className="table table-responsive table-bordered">
                            <thead>
                              <tr>
                                <td>Equipment</td>
                                <td>Start hours</td>
                                <td>End Hours</td>
                                <td>S.T.</td>
                                <td>O.T.</td>
                                <td>Total Hours</td>
                              </tr>
                            </thead>
                            <tbody>
                              {this.crewEquipmentDetail(item.crewEquipments)}
                            </tbody>
                          </table>
                        </div>
                      </fieldset>
                    </div>}
                </div>
              );
            })}
            <div className="spacer1" />
          </div>
        </div>
        <footer>
          <div className="btn-group btn-sm btn-group-justified">
            <div className="btn-group" role="group">
              <button
                type="button"
                onClick={() => this.props.handleRoute('crew')}
                className="btn btn-primary"
              >
                Edit/back
              </button>
            </div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  this.props.submitTimeSheet(eventDetail);
                  this.props.handleRoute('login');
                }}
              >
                Save
              </button>
            </div>

            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  this.props.submitTimeSheet(eventDetail);
                  this.props.handleRoute('login');
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="baryellow" />
          <div className="bargreen" />
          <div className="barorange" />
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    workDetail: state.eventDetail.workDetail,
    eventDetails: state.eventDetail.eventDetails,
    eventDetail: state.eventDetail,
    form: state.form
  };
}

export default connect(mapStateToProps, { submitTimeSheet })(TimeSheetPreview);
