import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import AddCrewMember from '../../components/AddCrewMember';
import AddMaterial from '../../components/AddMaterial';
import AddEquipment from '../../components/AddEquipment';
import ModalDialog from '../../components/ModalDialog';
import '../../assets/styles/style.css';
import {
  addCrewMember,
  addCrewMaterial,
  deleteCrewMember,
  deleteCrewMaterial,
  deleteCrewEquipment,
  editMember,
  updateCrewMember,
  updateCrewMaterial,
  updateCrewEquipment,
  editTimeCrewMaterial,
  editCrewEquipment,
  addCrewEquipment,
} from '../../actions/index';

const divStyle = {
  borderColor: 'green',
  borderStyle: 'solid',
};

class TimeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberList: [],
      modalIsOpen: false,
      modalMsgData: '',
      selectedMember: '',
      modalHeaderTitle: '',
      totalErrorMessage: '',
      totalEquErrorMessage: '',
      totalError: false,
      totalEquError: false,
    };
    this.deleteMember = this.deleteMember.bind(this);
    this.closeHelpModal = this.closeHelpModal.bind(this);
  }

  deleteMember() {
    if (this.state.selectedModal === 'member') {
      this.props.deleteCrewMember(
        this.state.eventIndex,
        this.state.selectedMember,
      );
    } else if (this.state.selectedModal === 'material') {
      this.props.deleteCrewMaterial(
        this.state.eventIndex,
        this.state.selectedMember,
      );
    } else {
      this.props.deleteCrewEquipment(
        this.state.eventIndex,
        this.state.selectedMember,
      );
    }
    this.closeHelpModal();
  }

  editMember(eventIndex, i) {
    this.props.editMember(eventIndex, i);
  }

  updateCrewMember(unit, eventIndex) {
    const { form } = this.props;
    const crewMemberData = form['CrewMember' + unit.userID].values;

    //Calculate st and et
    let hours = crewMemberData.endHour - crewMemberData.startHour;
    let minute;
    if (crewMemberData.startMinutes >= crewMemberData.endMinutes) {
      minute = crewMemberData.startMinutes - crewMemberData.endMinutes;
    } else {
      //hours=hours-1;
      minute = crewMemberData.endMinutes - crewMemberData.startMinutes;
    }

    //Calculate total time
    let totalHours =
      +crewMemberData.stHour + +crewMemberData.otHour + +crewMemberData.dtHour;
    let totalMinutes =
      +crewMemberData.stMinute +
      +crewMemberData.otMinute +
      +crewMemberData.dtMinute;
    let minutesToHours = Math.floor(Math.abs(totalMinutes) / 60);
    let leftMins = Math.abs(totalMinutes) % 60;
    let totalCount = totalHours + minutesToHours;

    //console.log("Hello",crewMemberData,eventIndex);
    let tmp = hours == totalCount ? minute >= leftMins : true;
    if (hours >= totalCount && hours != 0 && tmp) {
      this.props.updateCrewMember(eventIndex, crewMemberData);
      this.setState({ totalError: false });
    } else {
      this.setState({ totalError: true });
    }
  }

  editTimeCrewMaterial(eventIndex, i) {
    this.props.editTimeCrewMaterial(eventIndex, i);
  }

  updateCrewMaterial(unit, eventIndex) {
    const { form } = this.props;
    const MemberData = form['CrewMaterial' + unit.userID].values;
    this.props.updateCrewMaterial(eventIndex, MemberData);
  }

  editCrewEquipment(eventIndex, i) {
    this.props.editCrewEquipment(eventIndex, i);
  }

  updateCrewEquipment(unit, eventIndex) {
    const { form } = this.props;
    const crewMemberData = form['CrewEquipment' + unit.userID].values;

    //Calculate st and et
    let hours = crewMemberData.endHours - crewMemberData.startHour;
    let minute;
    if (crewMemberData.startMinutes >= crewMemberData.endMinutes) {
      minute = crewMemberData.startMinutes - crewMemberData.endMinutes;
    } else {
      //hours=hours-1;
      minute = crewMemberData.endMinutes - crewMemberData.startMinutes;
    }

    //Calculate total time
    let totalHours = +crewMemberData.stHour + +crewMemberData.otHour;
    let totalMinutes = +crewMemberData.stMinute + +crewMemberData.otMinute;
    let minutesToHours = Math.floor(Math.abs(totalMinutes) / 60);
    let leftMins = Math.abs(totalMinutes) % 60;
    let totalCount = totalHours + minutesToHours;
    let tmp = hours == totalCount ? minute >= leftMins : true;

    if (hours >= totalCount && hours != 0 && tmp) {
      this.props.updateCrewEquipment(eventIndex, crewMemberData);
      this.setState({ totalEquError: false });
    } else {
      this.setState({ totalEquError: true });
    }
  }

  openHelpMemModal(item, i, eventIndex) {
    this.setState({
      modalIsOpen: true,
      modalMsgData: `Are you sure you want to delete this ${item.firstName}?`,
      modalHeaderTitle: `Delete Crew Member`,
      selectedMember: i,
      selectedModal: 'member',
      eventIndex,
    });
  }

  openHelpMatModal(item, i, eventIndex) {
    this.setState({
      modalIsOpen: true,
      modalMsgData: `Are you sure you want to delete this ${item.firstName}?`,
      modalHeaderTitle: `Delete Crew Material`,
      selectedMember: i,
      selectedModal: 'material',
      eventIndex,
    });
  }

  openHelpEquipModal(item, i, eventIndex) {
    this.setState({
      modalIsOpen: true,
      modalMsgData: `Are you sure you want to delete this ${item.firstName}?`,
      modalHeaderTitle: `Delete Crew Equipment`,
      selectedMember: i,
      selectedModal: 'equipment',
      eventIndex,
    });
  }

  closeHelpModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  addCrewMember(index) {
    const { form } = this.props;
    let newCrewMemberForm;
    for (var formName in form) {
      if (formName.includes('newCrewMemberForm')) {
        newCrewMemberForm = formName;
      }
    }
    const crewMemberData = form[newCrewMemberForm].values;
    //Calculate st and et
    let hours = crewMemberData.endHour - crewMemberData.startHour;
    let minute;
    if (crewMemberData.startMinutes >= crewMemberData.endMinutes) {
      minute = crewMemberData.startMinutes - crewMemberData.endMinutes;
    } else {
      //hours=hours-1;
      minute = crewMemberData.endMinutes - crewMemberData.startMinutes;
    }

    //Calculate total time
    let totalHours =
      +crewMemberData.stHour + +crewMemberData.otHour + +crewMemberData.dtHour;
    let totalMinutes =
      +crewMemberData.stMinute +
      +crewMemberData.otMinute +
      +crewMemberData.dtMinute;
    let minutesToHours = Math.floor(Math.abs(totalMinutes) / 60);
    let leftMins = Math.abs(totalMinutes) % 60;
    let totalCount = totalHours + minutesToHours;

    let tmp = hours == totalCount ? minute >= leftMins : true;
    if (hours >= totalCount && hours != 0 && tmp) {
      crewMemberData.editMode = false;
      document.getElementById('totalReset').innerHTML = '0:0';
      crewMemberData.userID = String(parseInt(Math.random() * 9999));
      crewMemberData.totalErrorMessage = '';
      this.props.addCrewMember(index, crewMemberData);
      this.props.reset('newCrewMemberForm');
      this.setState({ totalErrorMessage: '' });
    } else {
      console.log(this.props);
      this.setState({
        totalErrorMessage: 'Total time is less then time duration',
      });
      //alert("Total time is less then time duration");
    }
  }

  addCrewMaterial(index) {
    const { form } = this.props;

    let newCrewMaterialForm;
    for (var formName in form) {
      if (formName.includes('newCrewMaterialForm')) {
        newCrewMaterialForm = formName;
      }
    }

    const crewMaterialData = form[newCrewMaterialForm].values;
    crewMaterialData.userID = String(parseInt(Math.random() * 9999));
    this.props.addCrewMaterial(index, crewMaterialData);
    this.props.reset(newCrewMaterialForm);
  }

  addCrewEquipment(index) {
    const { form } = this.props;
    let newCrewEquipmentForm;
    for (var formName in form) {
      if (formName.includes('newCrewEquipmentForm')) {
        newCrewEquipmentForm = formName;
      }
    }
    const crewEquipmentData = form[newCrewEquipmentForm].values;
    //Calculate st and et
    let hours = crewEquipmentData.endHours - crewEquipmentData.startHour;
    let minute;
    if (crewEquipmentData.startMinutes >= crewEquipmentData.endMinutes) {
      minute = crewEquipmentData.startMinutes - crewEquipmentData.endMinutes;
    } else {
      //hours=hours-1;
      minute = crewEquipmentData.endMinutes - crewEquipmentData.startMinutes;
    }

    //Calculate total time
    let totalHours = +crewEquipmentData.stHour + +crewEquipmentData.otHour;
    let totalMinutes =
      +crewEquipmentData.stMinute + +crewEquipmentData.otMinute;
    let minutesToHours = Math.floor(Math.abs(totalMinutes) / 60);
    let leftMins = Math.abs(totalMinutes) % 60;
    let totalCount = totalHours + minutesToHours;

    let tmp = hours == totalCount ? minute >= leftMins : true;
    if (hours >= totalCount && hours != 0 && tmp) {
      crewEquipmentData.userID = String(parseInt(Math.random() * 9999));
      crewEquipmentData.totalEquErrorMessage = '';
      document.getElementById('totalEquReset').innerHTML = '0:0';
      newCrewEquipmentForm.userID = String(parseInt(Math.random() * 9999));
      this.props.addCrewEquipment(index, crewEquipmentData);
      this.props.reset(newCrewEquipmentForm);
      this.setState({ totalEquErrorMessage: '' });
    } else {
      this.setState({
        totalEquErrorMessage: 'Total time is less then time duration',
      });
    }
  }

  renderEventDetails(item, index) {
    return (
      <div>
        {this.renderCrewMembers(item, index)}
        <div className="spacer1" />
        {this.renderMaterials(item, index)}
        <div className="spacer1" />
        {this.renderEquipments(item, index)}
        <hr style={divStyle} />
      </div>
    );
  }

  renderCrewMembers(item, index) {
    return (
      <div>
        {item.crewMembers &&
          item.crewMembers.map((crewMember, i) => {
            if (i !== 0) {
              return (
                <div key={i}>
                  <AddCrewMember
                    key={`CrewMember${crewMember.userID}`}
                    form={`CrewMember${crewMember.userID}`}
                    initialValues={crewMember}
                    editButtons={true}
                    totalError={this.state.totalError}
                    editMode={crewMember.editMode}
                    deleteMember={() =>
                      this.openHelpMemModal(crewMember, i, index)
                    }
                    editMember={() => this.editMember(index, i)}
                    updateMember={() =>
                      this.updateCrewMember(crewMember, index)
                    }
                  />
                </div>
              );
            }
          })}
        <div className="clearfix" />
        <AddCrewMember
          editMode={true}
          key={`newCrewMemberForm${item.crewMembers[0].userID}`}
          form={`newCrewMemberForm${item.crewMembers[0].userID}`}
          initialValues={item.crewMembers[0]}
        />
        <span className="text-danger">{this.state.totalErrorMessage}</span>

        <button
          className="btn btn-primary btn-block text-right"
          onClick={() => this.addCrewMember(index)}
        >
          Add Member +
        </button>
      </div>
    );
  }
  renderMaterials(item, index) {
    return (
      <div>
        {item.crewMaterials &&
          item.crewMaterials.map((crewMaterial, i) => {
            if (i !== 0) {
              return (
                <div>
                  <AddMaterial
                    key={`CrewMaterial${crewMaterial.userID}`}
                    form={`CrewMaterial${crewMaterial.userID}`}
                    initialValues={crewMaterial}
                    editButtons={true}
                    editMode={crewMaterial.editMode}
                    deleteMember={() =>
                      this.openHelpMatModal(crewMaterial, i, index)
                    }
                    editMember={() => this.editTimeCrewMaterial(index, i)}
                    updateMember={() =>
                      this.updateCrewMaterial(crewMaterial, index)
                    }
                  />
                </div>
              );
            }
          })}
        <AddMaterial
          editMode={true}
          key={`newCrewMaterialForm${item.crewMaterials[0].userID}`}
          form={`newCrewMaterialForm${item.crewMaterials[0].userID}`}
          initialValues={item.crewMaterials[0]}
        />

        <button
          className="btn btn-primary btn-block text-right"
          onClick={() => this.addCrewMaterial(index)}
        >
          Add Material +
        </button>
      </div>
    );
  }

  renderEquipments(item, index) {
    return (
      <div>
        {item.crewEquipments &&
          item.crewEquipments.map((crewEquipment, i) => {
            if (i !== 0) {
              return (
                <div>
                  <AddEquipment
                    key={`CrewEquipment${crewEquipment.userID}`}
                    form={`CrewEquipment${crewEquipment.userID}`}
                    initialValues={crewEquipment}
                    editButtons={true}
                    totalEquError={this.state.totalEquError}
                    editMode={crewEquipment.editMode}
                    deleteMember={() =>
                      this.openHelpEquipModal(crewEquipment, i, index)
                    }
                    editMember={() => this.editCrewEquipment(index, i)}
                    updateMember={() =>
                      this.updateCrewEquipment(crewEquipment, index)
                    }
                  />
                </div>
              );
            }
          })}

        <AddEquipment
          editMode={true}
          form="newCrewEquipmentForm"
          key={`newCrewEquipmentForm${item.crewEquipments[0].userID}`}
          form={`newCrewEquipmentForm${item.crewEquipments[0].userID}`}
          initialValues={item.crewEquipments[0]}
        />
        <span className="text-danger">{this.state.totalEquErrorMessage}</span>
        <button
          className="btn btn-primary btn-block text-right"
          onClick={() => this.addCrewEquipment(index)}
        >
          Add Equipment +
        </button>
      </div>
    );
  }

  render() {
    const { eventDetail, eventIndex } = this.props;
    return (
      <div>
        {this.renderEventDetails(eventDetail, eventIndex)}
        {
          <ModalDialog
            isOpen={this.state.modalIsOpen}
            messageData={this.state.modalMsgData}
            modalHeaderTitle={this.state.modalHeaderTitle}
            closePopup={this.closeHelpModal}
            handleAction={this.deleteMember}
          />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialValues: state.newTimeSheet.eventDetails[0],
    form: state.form,
  };
}

export default connect(mapStateToProps, {
  addCrewMember,
  deleteCrewMember,
  editMember,
  addCrewMaterial,
  deleteCrewMaterial,
  deleteCrewEquipment,
  editTimeCrewMaterial,
  editCrewEquipment,
  addCrewEquipment,
  updateCrewMember,
  updateCrewMaterial,
  updateCrewEquipment,
  reset,
})(TimeDetails);
