const initialState = {
  equipments: [
    {
      id: '100',
      materialID: '100',
      name: 'Cables',
      quantity: 2,
      measurement: '',
    }
  ]
};

export default function addEquipment(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MATERIAL':
      let equipments = JSON.parse(JSON.stringify(state.equipments));
      equipments.push(action.payload);
      return {...state, equipments };

    default:
      return state;
  }
}
