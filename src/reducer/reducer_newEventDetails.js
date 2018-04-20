const initialState = {
  eventID: '',
  unitMaterial: {},
};

export default function newEventDetailReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_UNITMATERIAL_INITIALVALUES':
      return { ...state, unitMaterial: action.data };
    case 'ADD_EVENT_UNIT_MATERIAL':
      return initialState;

    default:
      return state;
  }
}
