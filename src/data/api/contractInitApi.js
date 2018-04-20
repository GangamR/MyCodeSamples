import dataContract from '../json/contacts.json';
/*
https://stackoverflow.com/questions/31758081/loading-json-data-from-local-file-into-react-js/33141549
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "data.json", true);
oReq.send();

function dataTS(e) {
    data = JSON.parse(this.responseText);
}
*/

class contractInitApi {
    constructor() {
        this.rawData = dataContract;
    }

    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }
   
     // get the worktype (workType)
    getWorkType() {
        return this.rawData.workType;
    }

    //get all the contract- numbers: contracts[].contractNumber.
    //In the work-details screen the contract-ids will be loaded as drop-down.

    getContractNumber() {
        return this.rawData.contracts[0].contractNumber;
    }

    //    get crewroles description: contracts[].crewRoles.desc; for a given contract- id.
    //This will be loaded as drop - down for crew roles.

    getCrewRoles(contractId) {
        return this.mapIntoObject(this.rawData.contracts[0].crewRoles);
    }

//    get crewroles description: contracts[].crewRoles.desc; for a given contract- id.
//This will be loaded as drop - down for crew roles.

    //getCrewId(contractId, crewroleDesc) {
    //    return this.mapIntoObject(this.rawData.contracts[0].crewRoles);
    //}

    //get material descriptions: contracts[].materials.desc.
    //This will be loaded as drop - down for material name.

    getMaterials(contractId) {
        return this.mapIntoObject(this.rawData.contracts[0].material);
    }

    //    get material-id for a given contract- id and material- desc.
    //This id will be mapped to materials[].materialID when JSON is created for "Save" or "Submit" action events.
    //getMaterialId(contractId, materialDesc) {
    //    return this.mapIntoObject(this.rawData.contracts[0].crewRoles);
    //}

    //get equipment descriptions: contracts[].equipments.desc.
    //This will be loaded as drop - down for equipment name.
    getEquipments(contractId) {
        return this.mapIntoObject(this.rawData.contracts[0].equipments);
    }

    //    get equipment-id for a given contract- id and equipment- desc.
    //This id will be mapped to equipments[].equipmentID when JSON is created for "Save" or "Submit" action events.
    //getEquipmentId(contractId, equipmentDesc) {
    //    return this.mapIntoObject(this.rawData.contracts[0].crewRoles);
    //}

    //    get crew-minutes descriptions: contracts[].crewMins.desc.
    //This will be loaded as drop - down for "Crew Min ST/OT/DT" in "Add Indirects" table.
    getCrewMinutes(contractId) {
        return this.mapIntoObject(this.rawData.contracts[0].crewMins);
    }


    //getIndirectCodes(contractId) {
    //    return this.mapIntoObject(this.rawData.contracts[0].crewRoles);
    //}

    //get unit description: contracts[].units.desc.
    //This will loaded as drop-down for unit details.
    getUnits(contractId) {
        return this.mapIntoObject(this.rawData.contracts[0].units);
    }

    //    get unit-id for a given contract- id and unit- desc.
    //This id will be mapped to units[].unitId when JSON is created for "Save" or "Submit" action events.
    //getUnitId(contractId, unitDesc) {
    //    return this.mapIntoObject(this.rawData.contracts[0].crewRoles);
    //}

    
}

export default contractInitApi;
