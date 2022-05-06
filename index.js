const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(obj, key, value,){
    const newObj = {...obj };
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value,){
    obj[key] = value;
    return obj;
}

const update = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

function deleteFromEmployeeByKey(obj, key, value,){
    const newObj = {...obj };
    newObj[key] = value;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value,){
    obj[key] = value;
    return obj;
}
