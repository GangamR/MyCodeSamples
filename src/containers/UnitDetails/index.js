import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import AddUnitCrewMember from '../../components/AddUnitCrewMember';
import AddMaterial from '../../components/AddMaterial';
import ModalDialog from '../../components/ModalDialog';
import UnitMaterialForm from '../../components/UnitMaterialForm';
import '../../assets/styles/style.css';
import {
  addUnitDetail,
  addUnitMember,
  editUnitDetail,
  editUnitMember,
  editUnitMaterial,
  updateUnitCrewMember,
  deleteUnitDetail,
  deleteUnitMaterial,
  deleteUnitMember,
  updateUnitDetail,
  updateUnitMaterial,
  addUnitMaterial,
} from '../../actions/index';

const divStyle = {
  borderColor: 'green',
  borderStyle: 'solid',
};

class UnitMaterial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalMsgData: '',
      selectedMember: '',
      modalHeaderTitle: '',
    };
  }

  openHelpMemModal(item, i, eventIndex) {
    this.setState({
      modalIsOpen: true,
      modalMsgData: `Are you sure you want to delete this ${item}?`,
      modalHeaderTitle: `Delete Crew Member`,
      selectedMember: i,
      selectedModal: 'member',
      eventIndex,
    });
  }

  openHelpDetailModal(item, i, eventIndex, selectedModal) {
    this.setState({
      modalIsOpen: true,
      modalMsgData: `Are you sure you want to delete this ${item}?`,
      modalHeaderTitle: `Delete Crew Material`,
      selectedMember: i,
      selectedModal: selectedModal,
      eventIndex,
    });
  }

  closeHelpModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  addUnitDetails(index) {
    const { form } = this.props;
    let newUnitDetailForm;
    for (var formName in form) {
      if (formName.includes('newUnitDetailForm')) {
        newUnitDetailForm = formName;
      }
    }
    const unitDetailData = form[newUnitDetailForm].values;
    unitDetailData.userID = String(parseInt(Math.random() * 9999));
    this.props.addUnitDetail(index, unitDetailData);
    this.props.reset(newUnitDetailForm);
  }

  addUnitMember(index) {
    const { form } = this.props;
    let newUnitMemberForm;
    for (var formName in form) {
      if (formName.includes('newUnitMemberForm')) {
        newUnitMemberForm = formName;
      }
    }
    const unitMemberData = form[newUnitMemberForm].values;
    unitMemberData.userID = String(parseInt(Math.random() * 9999));
    this.props.addUnitMember(index, unitMemberData);
    this.props.reset(newUnitMemberForm);
  }

  addUnitMaterial(index) {
    const { form } = this.props;
    let newUnitMaterialForm;
    for (var formName in form) {
      if (formName.includes('newUnitMaterialForm')) {
        newUnitMaterialForm = formName;
      }
    }
    const unitMaterialData = form[newUnitMaterialForm].values;
    unitMaterialData.userID = String(parseInt(Math.random() * 9999));
    this.props.addUnitMaterial(index, unitMaterialData);

    this.props.reset(newUnitMaterialForm);
  }

  editUnitMaterial(eventIndex, i) {
    this.props.editUnitMaterial(eventIndex, i);
  }

  editUnitMember(eventIndex, i) {
    this.props.editUnitMember(eventIndex, i);
  }

  editUnitDetail(eventIndex, i) {
    this.props.editUnitDetail(eventIndex, i);
  }

  updateUnitCrewMember(unit, eventIndex) {
    const { form } = this.props;
    const unitMemberData = form['Unit' + unit.userID].values;
    this.props.updateUnitCrewMember(eventIndex, unitMemberData);
  }

  updateUnitDetail(unit, eventIndex) {
    const { form } = this.props;
    const unitMemberData = form['Unit' + unit.userID].values;
    this.props.updateUnitDetail(eventIndex, unitMemberData);
  }

  updateUnitMaterial(unit, eventIndex) {
    const { form } = this.props;
    const MemberData = form['UnitMaterial' + unit.userID].values;
    this.props.updateUnitMaterial(eventIndex, MemberData);
  }

  deleteMember() {
    if (this.state.selectedModal === 'member') {
      this.props.deleteUnitMember(
        this.state.eventIndex,
        this.state.selectedMember,
      );
    } else if (this.state.selectedModal === 'material') {
      this.props.deleteUnitMaterial(
        this.state.eventIndex,
        this.state.selectedMember,
      );
    } else {
      this.props.deleteUnitDetail(
        this.state.eventIndex,
        this.state.selectedMember,
      );
    }
    this.closeHelpModal();
  }

  renderUnitDetails(item, index) {
    return (
      <div key={index}>
        {item.unitDetails &&
          item.unitDetails.map((unit, i) => {
            if (i !== 0) {
              return (
                <div key={i}>
                  <UnitMaterialForm
                    key={`Unit${unit.userID}`}
                    form={`Unit${unit.userID}`}
                    initialValues={unit}
                    editButtons={true}
                    editMode={unit.editMode}
                    deleteMember={() =>
                      this.openHelpDetailModal(item, i, index, 'unit')
                    }
                    editMember={() => this.editUnitDetail(index, i)}
                    updateMember={() => this.updateUnitDetail(unit, index, i)}
                  />
                </div>
              );
            }
          })}
        <UnitMaterialForm
          editMode={true}
          key={`newUnitDetailForm${item.unitDetails[0].userID}`}
          form={`newUnitDetailForm${item.unitDetails[0].userID}`}
          initialValues={item.unitDetails[0]}
        />
        <button
          className="btn btn-primary btn-block text-right"
          onClick={() => this.addUnitDetails(index)}
        >
          Add Units
        </button>
      </div>
    );
  }

  renderMaterials(item, index) {
    return (
      <div>
        {item.unitMaterials &&
          item.unitMaterials.map((unitMaterial, i) => {
            if (i !== 0) {
              return (
                <div key={i}>
                  <AddMaterial
                    key={`UnitMaterial${unitMaterial.userID}`}
                    form={`UnitMaterial${unitMaterial.userID}`}
                    initialValues={unitMaterial}
                    editButtons={true}
                    editMode={unitMaterial.editMode}
                    deleteMember={() =>
                      this.openHelpDetailModal(
                        unitMaterial,
                        i,
                        index,
                        'material',
                      )
                    }
                    editMember={() => this.editUnitMaterial(index, i)}
                    updateMember={() =>
                      this.updateUnitMaterial(unitMaterial, index)
                    }
                  />
                </div>
              );
            }
          })}
        <AddMaterial
          editMode={true}
          key={`newUnitMaterialForm${item.unitMaterials[0].userID}`}
          form={`newUnitMaterialForm${item.unitMaterials[0].userID}`}
          initialValues={item.unitMaterials[0]}
        />
        <button
          className="btn btn-primary btn-block text-right"
          onClick={() => this.addUnitMaterial(index)}
        >
          Add Material +
        </button>
      </div>
    );
  }

  renderEventDetails(item, index) {
    return (
      <div>
        {this.renderMaterials(item, index)}
        {this.renderUnitDetails(item, index)}
        <div className="clearfix" />
        {this.renderUnitMembers(item, index)}
        <hr style={divStyle} />
      </div>
    );
  }

  renderUnitMembers(item, index) {
    return (
      <div>
        {item.unitMembers &&
          item.unitMembers.map((member, i) => {
            if (i !== 0) {
              return (
                <div key={i}>
                  <AddUnitCrewMember
                    key={`Unit${member.userID}`}
                    form={`Unit${member.userID}`}
                    initialValues={member}
                    editButtons={true}
                    editMode={member.editMode}
                    deleteMember={() => this.openHelpMemModal(member, i, index)}
                    editMember={() => this.editUnitMember(index, i)}
                    updateCrewMember={() =>
                      this.updateUnitCrewMember(member, index, i)
                    }
                  />
                </div>
              );
            }
          })}
        <AddUnitCrewMember
          editMode={true}
          key={`newUnitMemberForm${item.unitMembers[0].userID}`}
          form={`newUnitMemberForm${item.unitMembers[0].userID}`}
          initialValues={item.unitMembers[0]}
        />
        <button
          className="btn btn-primary btn-block text-right"
          onClick={() => this.addUnitMember(index)}
        >
          Add Indirects +
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
            closePopup={() => this.closeHelpModal()}
            handleAction={() => this.deleteMember()}
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
  addUnitDetail,
  addUnitMember,
  deleteUnitMaterial,
  deleteUnitDetail,
  deleteUnitMember,
  updateUnitCrewMember,
  editUnitDetail,
  updateUnitDetail,
  updateUnitMaterial,
  editUnitMember,
  editUnitMaterial,
  addUnitMaterial,
  reset,
})(UnitMaterial);
