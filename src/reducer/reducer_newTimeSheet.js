const today = new Date();
const todayDate = formatDate(today);
function formatDate(date) {
    var monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex] + ' ' + day + ' ' + year;
}

export default function () {
    return {
        tsPKId: '',
        poNumber: '',
        date: todayDate,
        vendorName: '',
        vendorReferenceNumber: '',
        contractNumber: '',
        jtnNumber: '',
        serviceCenter: '',
        workType: '',
        contractID: '',
        eventDetails: [
            {
                eventPKId: '',
                eventType: 'E',
                eventStatus: '',
                eventID: '',
                isUnitBilling: 'UM',
                workLocation: '',
                workDescription:'' ,
                crewMembers: {
                    crewPKId: '',
                    firstName: '',
                    lastName: '',
                    startHour: '0',
                    startMinutes: '0',
                    endHour: '0',
                    endMinutes: '0',
                    stHour: '0',
                    otHour: '0',
                    dtHour: '0',
                    stMinute: '0',
                    otMinute: '0',
                    dtMinute: '0',
                    meals: '0',
                    role: '',
                    desc: '',
                    employID: ''
                },
                materials: {
                    materialID: '',
                    desc: '',
                    materialPKId: '',
                    quantity: '',
                    matUnsiz: ''
                },
                equipments: {
                    equipmentID: '',
                    desc: '',
                    equipmentPKId: '',
                    startHour: '0',
                    startMinutes: '0',
                    endHours: '0',
                    endMinutes: '0',
                    stHour: '0',
                    stMinute: '0',
                    otHour: '0',
                    otMinute: '0'
                },
                units: {
                    unitId: '',
                    unitPKId: '',
                    desc: '',
                    quantity: '',
                    indirectCode: '',
                    poleLocNo:'' ,
                    manCount: '',
                    crewForeman:'' ,
                    crewNumber: '',
                    materialPKId: '',
                    quantity: '',
                    matUnsiz: ''
                },
            },
        ],
    };
}


