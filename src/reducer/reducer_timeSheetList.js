const timeSheet = {
  timeSheets: [
    {
      eventDetails: [
        {
          crewEquipments: [],
          crewMaterials: [],
          crewMembers: [],
          unitDetails: [],
          unitMembers: [],
          unitMaterials: [],
          eventId: '00001',
          eventID: 'event1',
          evtType: 'UM',
        },
      ],
      workDetail: {
        date: '12/05/2007',
        jtnNumber: '5454',
        poNumber: '54545',
        vendorReferecneNumber: '5454',
        id: 'timeSheet1',
      },
      status: 'draft',
    },
    {
      eventDetails: [
        {
          crewEquipments: [],
          crewMaterials: [],
          crewMembers: [],
          unitDetails: [],
          unitMembers: [],
          unitMaterials: [],
          eventId: '00002',
          eventID: 'event1',
          evtType: 'UM',
        },
      ],
      workDetail: {
        date: '12/05/2017',
        jtnNumber: '123456',
        poNumber: '4488',
        vendorReferecneNumber: '8789789',
        id: 'timeSheet2',
      },
      status: 'draft',
    },
    {
      eventDetails: [
        {
          crewEquipments: [],
          crewMaterials: [],
          crewMembers: [],
          unitDetails: [],
          unitMembers: [],
          unitMaterials: [],
          eventId: '00003',
          eventID: 'event1',
          evtType: 'UM',
        },
      ],
      workDetail: {
        date: '01/05/2018',
        jtnNumber: '5454',
        poNumber: '54545',
        vendorReferecneNumber: '5454',
        id: 'timeSheet3',
      },
      status: 'sending',
    },
  ],
};

export default function timeSheetReducer(state = timeSheet, action) {
  switch (action.type) {
    case 'SUBMIT_TIME_SHEET':
      let timeSheets = JSON.parse(JSON.stringify(state.timeSheets));
      let index = timeSheets.findIndex(
        sheet => sheet.workDetail.id === action.eventDetail.workDetail.id,
      );
      if (index !== -1) {
        timeSheets[index] = action.eventDetail;
      } else {
        timeSheets.push(action.eventDetail);
      }
      return { ...state, timeSheets };
    default:
      return state;
  }
}
