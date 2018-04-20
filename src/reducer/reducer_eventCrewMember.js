const initialState = {
  crewMembers: [
    {
      userID: 0,
      firstName: 'John',
      lastName: 'Paul',
      startHour: '02',
      startMinutes: '20',
      endHour: '02',
      endMinutes: '30',
      stHour: 1,
      otHour: 2,
      dtHour: 3,
      stMinute: 1,
      otMinute: 2,
      dtMinute: 3,
      delayMinutes: 40,
      meals: 1,
      role: '',
      employeeID: 111,
      crewNumber: 100,
    }
  ]
};

export default function addEventCrewMember(state = initialState, action) {
  switch (action.type) {
    case 'ADD_EVENT_CREW_MEMBER':
      let crewMembers = JSON.parse(JSON.stringify(state.crewMembers));
      crewMembers.push(action.payload);
      return {...state, crewMembers };

    default:
      return state;
  }
}
