class reducer_newTimeSheetClass {
    constructor(eventDetails, woDts) {
        
        /*var woDts = JSON.parse(workDetails);*/
        this.id = woDts.id ? woDts.id :'',
            this.serviceCenter = woDts.serviceCenter ? woDts.serviceCenter: '',
            this.jtnCode = woDts.jtnNumber ? woDts.jtnNumber : '',
            this.vendorName = woDts.vendorName ? woDts.vendorName: '',
            this.vendorReferenceNumber = woDts.vendorReferenceNumber ? woDts.vendorReferenceNumber : '',
            this.poNumber = woDts.poNumber ? woDts.poNumber : '',
            this.workDate = woDts.date ? woDts.date:'',
            this.tsPKId = woDts.tsPKId ? woDts.tsPKId:'',
            this.contractNumber = woDts.contractID ? woDts.contractID: '',
            this.deleted = [];

        if (eventDetails === undefined || eventDetails === null) {
            this.events = []; 
        }
        else {
            this.events = [];
            var eventsUnits = [];
            for (var i = 0; i < eventDetails.length; i++) {
                const xi = i;
                if (eventDetails[xi].isUnitBilling === true) {
                    //ready to send data to the units arrays

                    this.events[xi] = {
                        eventPKId: "", eventType: eventDetails[xi].eventType,
                        eventStatus: "", eventID: eventDetails[xi].eventID,
                        isUnitBilling: eventDetails[xi].isUnitBilling,
                        workLocation: eventDetails[xi].workLocation,
                        workDescription: eventDetails[xi].workDescription,
                        // units: eventDetails[xi].units,

                    };
                   /* eventsUnits.push(eventDetails[xi].unitDetails, eventDetails[xi].unitMembers);
                    //eventsUnits.reduce
                    this.events = eventsUnits.reduce((acc, curr) => {
                        acc[curr.id] = curr;
                        return acc;
                    }, { });
                    */
                    this.events[xi].units = [];

                        for (var j = 0; j < eventDetails[xi].unitDetails.length; j++) {
                            const xj = j;
                            var unitdtls = eventDetails[xi].unitDetails[xj];
                            eventsUnits.push(
                                {
                                    unitPKId: "",
                                    unitId: unitdtls.userID ? unitdtls.userID : '',
                                    desc: "DESCR UserID",
                                    quantity: unitdtls.totalUnits ? unitdtls.totalUnits : '',
                                    indirectCode: ""

                                }
                            )
                        }
                   
                        for (var j1 = 0; j1 < eventDetails[xi].unitMembers.length; j1++) {
                            const xj1 = j1;
                            var unitmatls = eventDetails[xi].unitMembers[xj1];

                            eventsUnits.push(
                                {
                                    unitPKId: "",
                                    unitId: unitmatls.userID ? unitmatls.userID : '',
                                    desc: "DESCR UserID Materials",
                                    quantity: unitmatls.totalUnits ? unitmatls.totalUnits : '',
                                    indirectCode: unitmatls.indirectCode ? unitmatls.indirectCode : ''

                                })
                        }
                   
                        this.events[xi].units = eventsUnits; 

                }
                else {
                    this.events[xi] = {
                        eventPKId: "", eventType: eventDetails[xi].eventType,
                        eventStatus: "", eventID: eventDetails[xi].eventID,
                        isUnitBilling: eventDetails[xi].isUnitBilling,
                        workLocation: eventDetails[xi].workLocation,
                        workDescription: eventDetails[xi].workDescription,
                        crewMembers: eventDetails[xi].crewMembers,
                        materials: eventDetails[xi].crewMaterials,
                        equipments: eventDetails[xi].crewEquipments

                    };
                }
            }
        }

        console.log(JSON.stringify(eventDetails));
        /*
        let clsEvtDtls = new reducer_TSEvents(eventDetails);
        let clsCreDtls = new reducer_crewEquipments(eventDetails.crewEquipment);
        if (clsEvtDtls === undefined || clsEvtDtls === null) {
            this.events = [];

        }
        else {
        //    this.events = clsEvtDtls.map((acc, curr) => {
        //    acc[curr.eventID] = curr;
        //    return acc;
        //}, { });
            this.events = clsEvtDtls;
        }
        */
    }

    /*
    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.contractNumber] = curr;
            return acc;
        }, {});
    }

    mapIntoJSON() {
        return arr.reduce((acc, curr) => {
            acc[curr.contractNumber] = curr;
            return acc;
        }, {});
    }
    getEvents() {
        return this.mapIntoObjectE(this.rawData.events);
    }
    */
    getJSON_newTimeSheetClass() {
        return JSON.stringify(this);
    }
    
}

class reducer_TSEvents {
    constructor(eDtls) {
       /* var eDtls = JSON.parse(eventDetails); */
        this.crewEquipments = eDtls.crewEquipments ? eDtls.crewEquipments : [],
            this.crewMaterials = eDtls.crewMaterials ? reducer_crewEquipments(eDtls.crewMaterials) : [],
            this.crewMembers = eDtls.crewEquipment ? eDtls.crewEquipment :[],

            this.eventID = eDtls.eventID ? eDtls.crewEquipments : '',
            this.eventPKId = eDtls.eventId ? eDtls.eventId : '',
            this.eventType = eDtls.evtType ? eDtls.evtType : '',
            this.eventStatus = eDtls.eventStatus ? eDtls.eventStatus : '',
            this.isUnitBilling = eDtls.isUnitBilling ? eDtls.isUnitBilling: 0,
            this.workLocation = eDtls.workLocation ? eDtls.workLocation : '',
            this.workDescription = eDtls.workDescription ? eDtls.workDescription : ''
    }
    
}


class reducer_crewEquipments {
    constructor(crew) {
        /* var eDtls = JSON.parse(eventDetails); */
        this.crewEquipments = 
            this.eventID = crew.eventID ? crew.crewEquipments : '',
            this.eventPKId = crew.eventId ? crew.eventId : '',
            this.eventType = crew.evtType ? crew.evtType : '',
            this.eventStatus = crew.eventStatus ? crew.eventStatus : '',
            this.isUnitBilling = crew.isUnitBilling ? crew.isUnitBilling : 0,
            this.workLocation = crew.workLocation ? crew.workLocation : '',
            this.workDescription = crew.workDescription ? crew.workDescription : ''
    }

}

export default reducer_newTimeSheetClass;
