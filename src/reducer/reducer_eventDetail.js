import * as newEventData from '../assets/newEventData';

const today = new Date();
const todayDate = formatDate(today);
function formatDate(date) {
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

const eventDetail = {
  eventPKId: '',
  eventID: '',
  eventId: '',
  eventType: 'E',
  workLocation: '',
  isUnitBilling: 'UM',
  workDescription: '',
  comments: '',
  createEventID: function() {
    this.eventID = String(parseInt(Math.random() * 9999));
  },
  crewMembers: [
    {
      crewPKId: '',
      firstName: '',
      lastName: '',
      startHour: '0',
      startMinutes: '0',
      endHour: '0',
      endMinutes: '0',
      stHour: '0',
      otHour: '0',
      dtHour: '0',
      stMinute: '0',
      otMinute: '0',
      dtMinute: '0',
      meals: '0',
      role: '',
      desc: '',
      employID: '',
    },
  ],
  crewMaterials: [
    {
      materialID: '',
      desc: '',
      materialPKId: '',
      quantity: '',
      matUnsiz: '',
    },
  ],
  crewEquipments: [
    {
      equipmentID: '',
      desc: '',
      equipmentPKId: '',
      startHour: '0',
      startMinutes: '0',
      endHours: '0',
      endMinutes: '0',
      stHour: '0',
      stMinute: '0',
      otHour: '0',
      otMinute: '0',
    },
  ],
  unitDetails: [
    {
      totalUnits: '',
      name: '',
    },
  ],
  unitMembers: [
    {
      indirectCode: '',
      poleLocNo: '',
      manCount: '',
      crewForeman: '',
      crewNumber: '',
      crewMinSTOTDT: '',
      totalUnits: '',
    },
  ],
  unitMaterials: [
    {
      quantity: '',
      unSiz: '',
      name: '',
      userID: '1',
    },
  ],
};

const createEventID = () => {
  return String(parseInt(Math.random() * 9999));
};
const createEvent = () => {
  const newEventDetail = JSON.parse(JSON.stringify(eventDetail));
  newEventDetail.eventID = createEventID();
  return newEventDetail;
};

const getEvent = () => {
  createEvent();
  return createEvent();
};
const eventDetails = {
  eventDetails: [getEvent()],
  workDetail: {
    date: todayDate,
  },
  status: 'draft',
};

export default function eventDetailReducer(state = eventDetails, action) {
  switch (action.type) {
    case 'ADD_WORK_DETAILS':
      return { ...state, workDetail: action.workDetail };

    case 'ADD_EVENT_CREW_MEMBER':
      let eventDetailsCrew = JSON.parse(JSON.stringify(state.eventDetails));
      let crewMembers = JSON.parse(
        JSON.stringify(state.eventDetails[action.payload.index].crewMembers),
      );
      crewMembers.push(action.payload.crewMember);
      const crewMember = { ...newEventData.newCrewMember };
      crewMember.userID = String(parseInt(Math.random() * 9999));
      crewMembers[0] = crewMember;
      eventDetailsCrew[action.payload.index].crewMembers = crewMembers;
      return { ...state, eventDetails: eventDetailsCrew };

    case 'EDIT_CREW_MEMBER':
      let eventDetailsEdit = JSON.parse(JSON.stringify(state.eventDetails));
      let crewMembersEdit = JSON.parse(
        JSON.stringify(
          state.eventDetails[action.payload.eventIndex].crewMembers,
        ),
      );
      crewMembersEdit.map(member => (member.editMode = false));
      crewMembersEdit[action.payload.i].editMode = true;
      //crewMembersEdit.splice(crewMembersEdit.length - 1, 1);
      eventDetailsEdit[action.payload.eventIndex].crewMembers = crewMembersEdit;
      return { ...state, eventDetails: eventDetailsEdit };

    case 'DELETE_CREW_MEMBER':
      let eventDetailsDelete = JSON.parse(JSON.stringify(state.eventDetails));
      let crewMembersDelete = JSON.parse(
        JSON.stringify(
          state.eventDetails[action.payload.eventIndex].crewMembers,
        ),
      );
      crewMembersDelete.splice(action.payload.i, 1);
      eventDetailsDelete[
        action.payload.eventIndex
      ].crewMembers = crewMembersDelete;
      return { ...state, eventDetails: eventDetailsDelete };

    case 'ADD_EVENT_CREW_MATERIAL':
      let eventDetailsCrewMaterial = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      let crewMaterials = JSON.parse(
        JSON.stringify(state.eventDetails[action.payload.index].crewMaterials),
      );
      crewMaterials.push(action.payload.crewMaterial);
      const crewMaterial = { ...newEventData.newCrewMaterial };
      crewMaterial.userID = String(parseInt(Math.random() * 9999));
      crewMaterials[0] = crewMaterial;
      eventDetailsCrewMaterial[
        action.payload.index
      ].crewMaterials = crewMaterials;
      console.log('eventDetailsCrewMaterial', eventDetailsCrewMaterial);
      return { ...state, eventDetails: eventDetailsCrewMaterial };

    case 'DELETE_CREW_MATERIAL':
      let deleteMaterial = JSON.parse(JSON.stringify(state.eventDetails));
      let crewMaterialsDelete = JSON.parse(
        JSON.stringify(
          state.eventDetails[action.payload.eventIndex].crewMaterials,
        ),
      );
      crewMaterialsDelete.splice(action.payload.i, 1);
      deleteMaterial[
        action.payload.eventIndex
      ].crewMaterials = crewMaterialsDelete;
      return { ...state, eventDetails: deleteMaterial };

    case 'EDIT_CREW_MATERIAL':
      let editMaterial = JSON.parse(JSON.stringify(state.eventDetails));
      let crewMaterialsEdit = JSON.parse(
        JSON.stringify(
          state.eventDetails[action.payload.eventIndex].crewMaterials,
        ),
      );
      crewMaterialsEdit.map(member => (member.editMode = false));
      crewMaterialsEdit[action.payload.i].editMode = true;
      // crewMaterialsEdit.splice(crewMaterialsEdit.length - 1, 1);
      editMaterial[action.payload.eventIndex].crewMaterials = crewMaterialsEdit;
      return { ...state, eventDetails: editMaterial };

    case 'ADD_EVENT_CREW_EQUIPMENT':
      let eventDetailsCrewEquipment = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      let crewEquipments = JSON.parse(
        JSON.stringify(state.eventDetails[action.payload.index].crewEquipments),
      );
      crewEquipments.push(action.payload.crewEquipment);
      const crewEquipment = { ...newEventData.newCrewEquipment };
      crewEquipment.userID = String(parseInt(Math.random() * 9999));
      crewEquipments[0] = crewEquipment;
      eventDetailsCrewEquipment[
        action.payload.index
      ].crewEquipments = crewEquipments;
      return { ...state, eventDetails: eventDetailsCrewEquipment };

    case 'DELETE_CREW_EQUIPMENT':
      let deleteEquipment = JSON.parse(JSON.stringify(state.eventDetails));
      let crewEquipmentsDelete = JSON.parse(
        JSON.stringify(
          state.eventDetails[action.payload.eventIndex].crewEquipments,
        ),
      );
      crewEquipmentsDelete.splice(action.payload.i, 1);
      deleteEquipment[
        action.payload.eventIndex
      ].crewEquipments = crewEquipmentsDelete;
      return { ...state, eventDetails: deleteEquipment };

    case 'EDIT_CREW_EQUIPMENT':
      let editEquipment = JSON.parse(JSON.stringify(state.eventDetails));
      let crewEquipmentsEdit = JSON.parse(
        JSON.stringify(
          state.eventDetails[action.payload.eventIndex].crewEquipments,
        ),
      );
      crewEquipmentsEdit.map(member => (member.editMode = false));
      crewEquipmentsEdit[action.payload.i].editMode = true;
      // crewMaterialsEdit.splice(crewMaterialsEdit.length - 1, 1);
      editEquipment[
        action.payload.eventIndex
      ].crewEquipments = crewEquipmentsEdit;
      return { ...state, eventDetails: editEquipment };

    case 'ADD_EVENT_UNIT_MATERIAL':
      let eventDetailsUnit = JSON.parse(JSON.stringify(state.eventDetails));
      let unitMaterials = JSON.parse(
        JSON.stringify(state.eventDetails[action.payload.index].unitMaterials),
      );
      unitMaterials.push(action.payload.unitMaterial);
      const unitMaterial = { ...newEventData.newUnitMaterial };
      unitMaterial.userID = String(parseInt(Math.random() * 9999));
      unitMaterials[0] = unitMaterial;
      eventDetailsUnit[action.payload.index].unitMaterials = unitMaterials;
      return { ...state, eventDetails: eventDetailsUnit };

    case 'ADD_EVENT_UNIT_DETAIL':
      let eventDetailsUnitDetail = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      let unitDetails = JSON.parse(
        JSON.stringify(state.eventDetails[action.payload.index].unitDetails),
      );
      unitDetails.push(action.payload.unitDetail);
      const unitDetail = { ...newEventData.newUnitDetail };
      unitDetail.userID = String(parseInt(Math.random() * 9999));
      unitDetails[0] = unitDetail;
      eventDetailsUnitDetail[action.payload.index].unitDetails = unitDetails;
      return { ...state, eventDetails: eventDetailsUnitDetail };

    case 'ADD_EVENT_UNIT_MEMBER':
      let eventDetailsUnitMember = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      let unitMembers = JSON.parse(
        JSON.stringify(state.eventDetails[action.payload.index].unitMembers),
      );
      unitMembers.push(action.payload.unitMember);
      const unitMember = { ...newEventData.newUnitMember };
      unitMember.userID = String(parseInt(Math.random() * 9999));
      unitMembers[0] = unitMember;
      eventDetailsUnitMember[action.payload.index].unitMembers = unitMembers;
      return { ...state, eventDetails: eventDetailsUnitMember };

    case 'UPDATE_UNIT_MEMBER':
      let eventDetailsUpdateCrew = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      let updateUnitCrew = JSON.parse(
        JSON.stringify(state.eventDetails[action.payload.index].unitMembers),
      );
      updateUnitCrew.map(member => (member.editMode = false));
      // updateUnitCrew[action.payload.index].editMode = false;
      if (updateUnitCrew[action.payload.index - 1] !== undefined) {
        updateUnitCrew[action.payload.index - 1].editMode = false;
      }
      const unitCrewIndex = eventDetailsUpdateCrew[
        action.payload.index
      ].unitMembers.findIndex(
        member => member.userID === action.payload.data.userID,
      );
      eventDetailsUpdateCrew[action.payload.index].unitMembers[unitCrewIndex] =
        action.payload.data;
      return { ...state, eventDetails: eventDetailsUpdateCrew };

    case 'UPDATE_EVENT_UNIT_DETAIL':
      let eventDetailsUpdateUnitDetail = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      let updateUnitDetails = JSON.parse(
        JSON.stringify(state.eventDetails[action.payload.index].unitDetails),
      );
      updateUnitDetails.map(member => (member.editMode = false));
      if (updateUnitDetails[action.payload.index - 1] !== undefined) {
        updateUnitDetails[action.payload.index - 1].editMode = false;
      }
      const unitDetailIndex = eventDetailsUpdateUnitDetail[
        action.payload.index
      ].unitDetails.findIndex(
        unitDetail => unitDetail.userID === action.payload.unitDetail.userID,
      );
      eventDetailsUpdateUnitDetail[action.payload.index].unitDetails[
        unitDetailIndex
      ] =
        action.payload.unitDetail;
      return { ...state, eventDetails: eventDetailsUpdateUnitDetail };

    case 'UPDATE_CREW_MEMBER':
      let eventDetailsUpdateCrewMember = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      let updateCrewMember = JSON.parse(
        JSON.stringify(state.eventDetails[action.payload.index].crewMembers),
      );
      updateCrewMember.map(member => (member.editMode = false));
      if (updateCrewMember[action.payload.index - 1] !== undefined) {
        updateCrewMember[action.payload.index - 1].editMode = false;
      }
      const memberIndex = eventDetailsUpdateCrewMember[
        action.payload.index
      ].crewMembers.findIndex(
        detail => detail.userID === action.payload.data.userID,
      );
      eventDetailsUpdateCrewMember[action.payload.index].crewMembers[
        memberIndex
      ] =
        action.payload.data;
      return { ...state, eventDetails: eventDetailsUpdateCrewMember };

    case 'UPDATE_UNIT_MATERIAL':
      let eventDetailsUpdateUnitMaterial = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      let updateUnitMaterial = JSON.parse(
        JSON.stringify(state.eventDetails[action.payload.index].unitMaterials),
      );
      updateUnitMaterial.map(member => (member.editMode = false));
      if (updateUnitMaterial[action.payload.index - 1] !== undefined) {
        updateUnitMaterial[action.payload.index - 1].editMode = false;
      }
      const unitMaterialIndex = eventDetailsUpdateUnitMaterial[
        action.payload.index
      ].unitMaterials.findIndex(
        detail => detail.userID === action.payload.data.userID,
      );
      eventDetailsUpdateUnitMaterial[action.payload.index].unitMaterials[
        unitMaterialIndex
      ] =
        action.payload.data;
      return { ...state, eventDetails: eventDetailsUpdateUnitMaterial };

    case 'UPDATE_UNITMATERIAL_INITIALVALUES':
      let eventDetailsUpdateUnitMaterialInit = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      eventDetailsUpdateUnitMaterialInit[action.eventIndex].unitMaterials[0] =
        action.data;
      return { ...state, eventDetails: eventDetailsUpdateUnitMaterialInit };

    case 'UPDATE_UNITDETAIL_INITIALVALUES':
      let eventDetailsUpdateUnitDetailInit = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      eventDetailsUpdateUnitDetailInit[action.eventIndex].unitDetails[0] =
        action.data;
      return { ...state, eventDetails: eventDetailsUpdateUnitDetailInit };

    case 'UPDATE_UNITMEMBER_INITIALVALUES':
      let eventDetailsUpdateUnitMemberInit = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      eventDetailsUpdateUnitMemberInit[action.eventIndex].unitMembers[0] =
        action.data;
      return { ...state, eventDetails: eventDetailsUpdateUnitMemberInit };

    case 'UPDATE_TIMEMEMBER_INITIALVALUES':
      let eventDetailsUpdateTimeMemberInit = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      eventDetailsUpdateTimeMemberInit[action.eventIndex].crewMembers[0] =
        action.data;
      return { ...state, eventDetails: eventDetailsUpdateTimeMemberInit };
    case 'UPDATE_TIMEMATERIAL_INITIALVALUES':
      let eventDetailsUpdateTimeMaterialInit = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      eventDetailsUpdateTimeMaterialInit[action.eventIndex].crewMaterials[0] =
        action.data;
      return { ...state, eventDetails: eventDetailsUpdateTimeMaterialInit };
    case 'UPDATE_TIMEEQUIPMENT_INITIALVALUES':
      let eventDetailsUpdateTimeEquipmentInit = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      eventDetailsUpdateTimeEquipmentInit[action.eventIndex].crewEquipments[0] =
        action.data;
      return { ...state, eventDetails: eventDetailsUpdateTimeEquipmentInit };

    case 'UPDATE_CREW_MATERIAL':
      let eventDetailsUpdateCrewMaterial = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      let updateCrewMaterial = JSON.parse(
        JSON.stringify(state.eventDetails[action.payload.index].crewMaterials),
      );
      updateCrewMaterial.map(member => (member.editMode = false));
      if (updateCrewMaterial[action.payload.index - 1] !== undefined) {
        updateCrewMaterial[action.payload.index - 1].editMode = false;
      }
      const materialIndex = eventDetailsUpdateCrewMaterial[
        action.payload.index
      ].crewMaterials.findIndex(
        detail => detail.userID === action.payload.data.userID,
      );
      eventDetailsUpdateCrewMaterial[action.payload.index].crewMaterials[
        materialIndex
      ] =
        action.payload.data;
      return { ...state, eventDetails: eventDetailsUpdateCrewMaterial };

    case 'UPDATE_CREW_EQUIPMENT':
      let eventDetailsUpdateCrewEquipment = JSON.parse(
        JSON.stringify(state.eventDetails),
      );
      let updateCrewEquipment = JSON.parse(
        JSON.stringify(state.eventDetails[action.payload.index].crewEquipments),
      );
      updateCrewEquipment.map(member => (member.editMode = false));
      if (updateCrewEquipment[action.payload.index - 1] !== undefined) {
        updateCrewEquipment[action.payload.index - 1].editMode = false;
      }
      //updateCrewEquipment[action.payload.index].editMode = false;
      const equipmentIndex = eventDetailsUpdateCrewEquipment[
        action.payload.index
      ].crewEquipments.findIndex(
        detail => detail.userID === action.payload.data.userID,
      );
      eventDetailsUpdateCrewEquipment[action.payload.index].crewEquipments[
        equipmentIndex
      ] =
        action.payload.data;
      return { ...state, eventDetails: eventDetailsUpdateCrewEquipment };

    case 'DELETE_UNIT_DETAIL':
      let deleteUnitDetail = JSON.parse(JSON.stringify(state.eventDetails));
      let unitDetailsDelete = JSON.parse(
        JSON.stringify(
          state.eventDetails[action.payload.eventIndex].unitDetails,
        ),
      );
      unitDetailsDelete.splice(action.payload.i, 1);
      deleteUnitDetail[
        action.payload.eventIndex
      ].unitDetails = unitDetailsDelete;
      return { ...state, eventDetails: deleteUnitDetail };

    case 'DELETE_UNIT_MATERIAL':
      let deleteUnitMaterial = JSON.parse(JSON.stringify(state.eventDetails));
      let unitMaterialsDelete = JSON.parse(
        JSON.stringify(
          state.eventDetails[action.payload.eventIndex].unitMaterials,
        ),
      );
      unitMaterialsDelete.splice(action.payload.i, 1);
      deleteUnitMaterial[
        action.payload.eventIndex
      ].unitMaterials = unitMaterialsDelete;
      return { ...state, eventDetails: deleteUnitMaterial };

    case 'EDIT_UNIT_DETAIL':
      let editUnitDetail = JSON.parse(JSON.stringify(state.eventDetails));
      let unitDetailsEdit = JSON.parse(
        JSON.stringify(
          state.eventDetails[action.payload.eventIndex].unitDetails,
        ),
      );
      unitDetailsEdit.map(member => (member.editMode = false));
      unitDetailsEdit[action.payload.i].editMode = true;
      // crewMaterialsEdit.splice(crewMaterialsEdit.length - 1, 1);
      editUnitDetail[action.payload.eventIndex].unitDetails = unitDetailsEdit;
      return { ...state, eventDetails: editUnitDetail };

    case 'EDIT_UNIT_MATERIAL':
      let editUnitMaterial = JSON.parse(JSON.stringify(state.eventDetails));
      let unitMaterialsEdit = JSON.parse(
        JSON.stringify(
          state.eventDetails[action.payload.eventIndex].unitMaterials,
        ),
      );
      console.log('state.eventDetails', state.eventDetails);
      console.log('action.payload.eventIndex', action.payload.eventIndex);
      unitMaterialsEdit.map(member => (member.editMode = false));
      // unitMaterialsEdit[action.payload.i].editMode = true;
      console.log('unitMaterialsEdit', unitMaterialsEdit);
      console.log('action.payload.i', action.payload.i);
      if (unitMaterialsEdit[action.payload.i] !== undefined) {
        unitMaterialsEdit[action.payload.i].editMode = true;
      }
      editUnitMaterial[
        action.payload.eventIndex
      ].unitMaterials = unitMaterialsEdit;
      return { ...state, eventDetails: editUnitMaterial };

    case 'DELETE_UNIT_MEMBER':
      let deleteUnitMember = JSON.parse(JSON.stringify(state.eventDetails));
      let unitMembersDelete = JSON.parse(
        JSON.stringify(
          state.eventDetails[action.payload.eventIndex].unitMembers,
        ),
      );
      unitMembersDelete.splice(action.payload.i, 1);
      deleteUnitMember[
        action.payload.eventIndex
      ].unitMembers = unitMembersDelete;
      return { ...state, eventDetails: deleteUnitMember };

    case 'EDIT_UNIT_MEMBER':
      let editUnitMember = JSON.parse(JSON.stringify(state.eventDetails));
      let unitMembersEdit = JSON.parse(
        JSON.stringify(
          state.eventDetails[action.payload.eventIndex].unitMembers,
        ),
      );
      unitMembersEdit.map(member => (member.editMode = false));
      unitMembersEdit[action.payload.i].editMode = true;
      // crewMaterialsEdit.splice(crewMaterialsEdit.length - 1, 1);
      editUnitMember[action.payload.eventIndex].unitMembers = unitMembersEdit;
      return { ...state, eventDetails: editUnitMember };

    case 'ADD_EVENT_DETAILS':
      let eventDetails = JSON.parse(JSON.stringify(state.eventDetails));
      const newEventDetails = eventDetails.map(evtDetail => {
        const evDetail = action.eventDetails.find(
          eDetail => eDetail.eventID === evtDetail.eventID,
        );
        if (evDetail) {
          evtDetail.eventId = evDetail.eventId;
        }
        return evtDetail;
      });
      newEventDetails.unshift(createEvent());
      return { ...state, eventDetails: newEventDetails };

    case 'ADD_EVENT_ID':
      let newEventDetailsFirst = JSON.parse(JSON.stringify(state.eventDetails));
      newEventDetailsFirst[0].eventId = action.eventId;
      return { ...state, eventDetails: newEventDetailsFirst };

    case 'SHOW_EVENT_DETAIL':
      const eventDetailsTimeSheet = JSON.parse(JSON.stringify(state));
      eventDetailsTimeSheet.workDetail = action.eventDetail.workDetail;
      eventDetailsTimeSheet.eventDetails = action.eventDetail.eventDetails;
      return eventDetailsTimeSheet;
    default:
      return state;
  }
}
