import NewTSLResultForm from '../reducer/reducer_newTimeSheetClass';

export function showEventDetail(eventDetail) {
  return {
    type: 'SHOW_EVENT_DETAIL',
    eventDetail,
  };
}

export function submitTimeSheet(eventDetail, timeSheetIndex) {
  console.log(eventDetail, timeSheetIndex);
  let classNewTSForm = new NewTSLResultForm(
    eventDetail.eventDetails,
    eventDetail.workDetail,
  );
  console.log(eventDetail);
  console.log(classNewTSForm.getJSON_newTimeSheetClass());
  return {
    type: 'SUBMIT_TIME_SHEET',
    eventDetail,
    timeSheetIndex,
  };
}

export function submitJsonTimeSheet(
  workDetail,
  eventDetails,
  eventDetail,
  timeSheetIndex,
) {
  console.log(workDetail, eventDetails, eventDetail, timeSheetIndex);
  return {
    type: 'SUBMIT_TIME_SHEET_JSON',
    eventDetail,
    timeSheetIndex,
  };
}

export function addWorkDetail(workDetail, eventIndex) {
  return {
    type: 'ADD_WORK_DETAILS',
    workDetail,
    eventIndex,
  };
}

export function UpdateUnitMaterialInitialValues(data) {
  return {
    type: 'UPDATE_UNITMATERIAL_INITIALVALUES',
    data,
    eventIndex: 0,
  };
}

export function UpdateTimeMemberInitialValues(data) {
  return {
    type: 'UPDATE_TIMEMEMBER_INITIALVALUES',
    data,
    eventIndex: 0,
  };
}

export function UpdateTimeMaterialInitialValues(data) {
  return {
    type: 'UPDATE_TIMEMATERIAL_INITIALVALUES',
    data,
    eventIndex: 0,
  };
}

export function UpdateTimeEquipmentInitialValues(data) {
  return {
    type: 'UPDATE_TIMEEQUIPMENT_INITIALVALUES',
    data,
    eventIndex: 0,
  };
}

export function UpdateUnitDetailInitialValues(data) {
    return {
        type: 'UPDATE_UNITDETAIL_INITIALVALUES',
        data,
        eventIndex: 0,
    };
}

export function UpdateUnitMemberInitialValues(data) {
    return {
        type: 'UPDATE_UNITMEMBER_INITIALVALUES',
        data,
        eventIndex: 0,
    };
}

export function addEvent(eventDetails) {
  return {
    type: 'ADD_EVENT_DETAILS',
    eventDetails,
  };
}

export function addEventId(eventId) {
  return {
    type: 'ADD_EVENT_ID',
    eventId,
  };
}

export function addUnitMaterial(i, unitMaterial) {
  return {
    type: 'ADD_EVENT_UNIT_MATERIAL',
    payload: { index: i, unitMaterial },
  };
}

export function addUnitDetail(i, unitDetail) {
    return {
        type: 'ADD_EVENT_UNIT_DETAIL',
        payload: { index: i, unitDetail },
    };
}

export function addUnitMember(i, unitMember) {
    return {
        type: 'ADD_EVENT_UNIT_MEMBER',
        payload: { index: i, unitMember },
    };
}

export function addCrewMember(i, crewMember) {
  return {
    type: 'ADD_EVENT_CREW_MEMBER',
    payload: { index: i, crewMember },
  };
}
export function addCrewMaterial(i, crewMaterial) {
  return {
    type: 'ADD_EVENT_CREW_MATERIAL',
    payload: { index: i, crewMaterial },
  };
}
export function addCrewEquipment(i, crewEquipment) {
  return {
    type: 'ADD_EVENT_CREW_EQUIPMENT',
    payload: { index: i, crewEquipment },
  };
}

export function deleteCrewMember(eventIndex, i) {
  return {
    type: 'DELETE_CREW_MEMBER',
    payload: { eventIndex, i },
  };
}
export function deleteCrewMaterial(eventIndex, i) {
  return {
    type: 'DELETE_CREW_MATERIAL',
    payload: { eventIndex, i },
  };
}
export function deleteUnitMaterial(eventIndex, i) {
  return {
    type: 'DELETE_UNIT_MATERIAL',
    payload: { eventIndex, i },
  };
}

export function deleteCrewEquipment(eventIndex, i) {
  return {
    type: 'DELETE_CREW_EQUIPMENT',
    payload: { eventIndex, i },
  };
}

export function deleteUnitDetail(eventIndex, i) {
  return {
    type: 'DELETE_UNIT_DETAIL',
    payload: { eventIndex, i },
  };
}

export function deleteUnitMember(eventIndex, i) {
  return {
    type: 'DELETE_UNIT_MEMBER',
    payload: { eventIndex, i },
  };
}

export function editMember(eventIndex, i) {
  return {
    type: 'EDIT_CREW_MEMBER',
    payload: { eventIndex, i },
  };
}
export function editCrewMaterial(eventIndex, i) {
  return {
    type: 'EDIT_UNIT_MATERIAL',
    payload: { eventIndex, i },
  };
}

export function editUnitMaterial(eventIndex, i) {
  return {
    type: 'EDIT_UNIT_MATERIAL',
    payload: { eventIndex, i },
  };
}

export function editCrewEquipment(eventIndex, i) {
  return {
    type: 'EDIT_CREW_EQUIPMENT',
    payload: { eventIndex, i },
  };
}

export function editUnitDetail(eventIndex, i) {
  return {
    type: 'EDIT_UNIT_DETAIL',
    payload: { eventIndex, i },
  };
}

export function updateCrewMember(i, data) {
  return {
    type: 'UPDATE_CREW_MEMBER',
    payload: { index: i, data },
  };
}
export function updateCrewMaterial(i, data) {
  return {
    type: 'UPDATE_CREW_MATERIAL',
    payload: { index: i, data },
  };
}
export function updateUnitMaterial(i, data) {
  return {
    type: 'UPDATE_UNIT_MATERIAL',
    payload: { index: i, data },
  };
}
export function updateCrewEquipment(i, data) {
  return {
    type: 'UPDATE_CREW_EQUIPMENT',
    payload: { index: i, data },
  };
}

export function updateUnitDetail(i, unitDetail) {
  return {
    type: 'UPDATE_EVENT_UNIT_DETAIL',
    payload: { index: i, unitDetail },
  };
}

export function updateUnitCrewMember(i, data) {
  return {
    type: 'UPDATE_UNIT_MEMBER',
    payload: { index: i, data },
  };
}

export function editUnitMember(eventIndex, i) {
  return {
    type: 'EDIT_UNIT_MEMBER',
    payload: { eventIndex, i },
  };
}

export function addMaterial(data) {
  return {
    type: 'ADD_MATERIAL',
    payload: data,
  };
}

export function editTimeCrewMaterial(eventIndex, i) {
  return {
    type: 'EDIT_CREW_MATERIAL',
    payload: { eventIndex, i },
  };
}

export function loadWorkType(data) {
  /* return dispatch => {
            dispatch(beginAjaxCall());
        //return contractInitApi.getAllAuthors().then(authors => {
        //    dispatch(loadAuthorsSuccess(authors));
        //}).catch(error => {
        //    throw (error);
        //});
        };
        */
  return {
    type: 'LOAD_WORKTYPE',
    payload: data,
  };
}

export function loadContractNumber(data) {
  return {
    type: 'LOAD_CONTRACTNUMBER',
    payload: data,
  };
}

export function loadCrewRoles(data, Id) {
  return {
    type: 'LOAD_CREWROLES',
    payload: { data, Id },
  };
}

export function loadMaterials(data, Id) {
  return {
    type: 'LOAD_MATERIALS',
    payload: { data, Id },
  };
}

export function loadEquipments(data, Id) {
  return {
    type: 'LOAD_EQUIPMENTS',
    payload: { data, Id },
  };
}

export function loadCrewMinutes(data, Id) {
  return {
    type: 'LOAD_CREWMINUTES',
    payload: { data, Id },
  };
}

export function loadUnits(data, Id) {
  return {
    type: 'LOAD_UNITS',
    payload: { data, Id },
  };
}
