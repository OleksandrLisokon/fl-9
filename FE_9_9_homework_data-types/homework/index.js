function findType (param) {
    return typeof param;
}

function forEach (arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function map (arr, func) {
    let result = [];
    forEach(arr, function (el) {
        result.push(func(el));
    });  
    return result;
}

function filter (arr, func) {
    let result = [];
    forEach(arr, function(el) {
        if (func(el)) {
            result.push(el);
        }
    });
    return result;
}

function getAdultAppleLovers (data) {
    let filteredData = filter(data, function(people) {
        return people.age >= 18 && people.favoriteFruit === `apple`;
    });
    return map(filteredData, function(people) {
        return people.name;
    });
}

function keys (obj) {
    let result = [];
    for (let prop in obj) {
        if (prop) {
            result.push(prop);
        }
    }
    return result;
}

function values (obj) {
    let result = [];
    for (let prop in obj) {
        if (prop) {
            result.push(obj[prop]);
        }
    }
    return result;
}

function showFormattedDate (date) {
    const months = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];
    return `It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}
