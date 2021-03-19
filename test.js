"use strict";
exports.__esModule = true;
var types_1 = require("./types");
//#region Variables
var p1 = { name: "Bill", age: 16 };
var p2 = { name: "Owen", age: 24 };
var p3 = { name: "Rick", age: 21 };
var c1 = { name: "HR", location: "Rotterdam" };
var e1 = { person: p1, company: c1, position: "Cashier" };
var e2 = { person: p2, company: c1, position: "Developer" };
var e3 = { person: p3, company: c1, position: "Study Coach" };
//#endregion
//#region Methods
var getName = function (person) {
    if (types_1.checkTypeValidity(person.name, "string"))
        return person.name;
    else
        throw new Error("Invalid type!");
};
var getNameFromEmployee = function (employee) {
    if (types_1.checkTypeValidity(employee.person.name, "string"))
        return employee.person.name;
    else
        throw new Error("Invalid type!");
};
//#endregion
console.log(getName(p1));
console.log(getName(p2));
console.log(getName(p3));
