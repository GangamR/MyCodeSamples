export function materialsFormattedForDropdown(materials) {
    return materials.map(mtl => {
        return {
            value: mtl.id,
            text: mtl.desc
        };
    });
}


export function equipmentsFormattedForDropdown(equipments) {
    return equipments.map((equipment, i) => {
        return {
            value: equipment[i].id,
            text: equipment[i].desc
        };
    });
}


export function contractsFormattedForDropdown(objs) {
    var retVal = []
    for (var j = 0; j < Object.keys(objs).length; j++) {
        retVal.push(
            {
                value: JSON.stringify(objs[j]),
                text: objs[j],

            }
        )
    }
    return retVal;
}

export function objectsFormattedForDropdown(objs) {
    var retVal = []
    for (var j = 0; j < Object.keys(objs).length; j++) {
        retVal.push(
            {
                value: JSON.stringify(objs[j].id),
                text: objs[j].desc,
                
            }
        )
    }
    return retVal;
}