import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import timeSheetReducer from './reducer_timeSheetList';
import addMaterialReducer from './reducer_addMaterial';
import addEquipmentReducer from './reducer_addEquipment';
import eventDetailReducer from './reducer_eventDetail';
import NewTimeSheetReducer from './reducer_newTimeSheet';
import contractInitClassReducer from './reducer_contractInitClass'

export default function createReducer(extraReducerObjects = {}) {
  return combineReducers({
    form: formReducer,
    timeSheetList: timeSheetReducer,
    addMaterials: addMaterialReducer,
    addEquipments: addEquipmentReducer,
    eventDetail: eventDetailReducer,
    newTimeSheet: NewTimeSheetReducer,
    contractInit: contractInitClassReducer,
  });
}
