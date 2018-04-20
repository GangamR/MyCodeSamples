const initialState = {
  materials: [
    {
      id: '100',
      materialID: '100',
      name: 'Cables',
      quantity: 2,
      measurement: '',
    }
  ]
};

export default function addMaterial(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MATERIAL':
      let materials = JSON.parse(JSON.stringify(state.materials));
      materials.push(action.payload);
      return {...state, materials };

    default:
      return state;
  }
}
