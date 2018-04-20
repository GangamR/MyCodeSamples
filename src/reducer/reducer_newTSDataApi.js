class reducer_newTSDataApi {
    constructor(rawData) {
        this.rawData = rawData;
    }
    
   
    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.contractNumber] = curr;
            return acc;
        }, {});
    }

    mapIntoObjectE(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.eventID] = curr;
            return acc;
        }, {});
    }

    mapIntoObjectU(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.unitId] = curr;
            return acc;
        }, {});
    }
    getEvents() {
        return this.mapIntoObjectE(this.rawData.events);
    }

    eventActions = {
        lookupEvent: EventID => this.getEvents()[EventID],
    }

    getUnits(eventId) {
            /*
        .findIndex(unit => sheet.workDetail.id === action.eventDetail.workDetail.id)


        return this.rawData.events[index].units
            .map((units, idx) => (units[idx] = units));

        */
        return this.mapIntoObjectU(this.eventActions.lookupEvent(eventId));
    }
    getnewTS() {
        return this.mapIntoObject(this.rawData);
    }
}

export default reducer_newTSDataApi;
