import contractsApi from '../data/api/contractInitApi';

const api = new contractsApi()

const initialState = {
    //workType: this.api.getWorkType(),
    //contractNumber: api.getContractNumber() ? api.getContractNumber() : '',
    //crewRoles: api.getCrewRoles() ? api.getCrewRoles() : '',
    //materials: api.getMaterials() ? api.getMaterials() : '',
    //equipments: api.getEquipments() ? api.getEquipments() : '',
    //crewMinutes: api.getCrewMinutes() ? api.getCrewMinutes() : '',
    //units: api.getUnits() ? api.getUnits() : ''

}

export default function contractInitClassReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_WORKTYPE':
            let _workType = JSON.parse(JSON.stringify(state.workType));
            return { ...state, _workType };
        case 'LOAD_CONTRACTNUMBER':
            let _contractNumber = JSON.parse(JSON.stringify(state.contractNumber));
            return { ...state, _contractNumber };
        case 'LOAD_CREWROLES':
            let _crewRoles = JSON.parse(JSON.stringify(state.crewRoles));
            return { ...state, _crewRoles };
        case 'LOAD_CREWID':
            return { ...state, workType: action.workType };
        case 'LOAD_MATERIALS':
            let _materials = JSON.parse(JSON.stringify(state.materials));
            return { ...state, _materials };
        case 'LOAD_MATERIALID':
            return { ...state, workType: action.workType };
        case 'LOAD_EQUIPMENTS':
            let _equipments = JSON.parse(JSON.stringify(state.equipments));
            return { ...state, _equipments };
        case 'LOAD_EQUIPMENTID':
            return { ...state, workType: action.workType };
        case 'LOAD_CREWMINUTES':
            let _crewMinutes = JSON.parse(JSON.stringify(state.crewMinutes));
            return { ...state, _crewMinutes };
        case 'LOAD_INDIRECTCODES':
            return { ...state, workType: action.workType };
        case 'LOAD_UNITS':
            let _units = JSON.parse(JSON.stringify(state.units));
            return { ...state, _units };
        case 'LOAD_UNITID':
            return { ...state, workType: action.workType };
        default:
            return state;
    }
}
