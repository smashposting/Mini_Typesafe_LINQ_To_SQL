"use strict";
exports.__esModule = true;
var types_1 = require("./types");
var Fun = function (f) {
    return ({
        f: f,
        then: function (g) {
            return then(this, g);
        }
    });
};
var then = function (f, g) {
    return Fun(function (a) { return g.f(f.f(a)); });
};
//#region Variables
var p1 = { name: "Bill", age: 16 };
var p2 = { name: "Owen", age: 24 };
var p3 = { name: "Rick", age: 21 };
var c1 = { name: "HR", location: "Rotterdam" };
var e1 = { person: p1, company: c1, position: "Cashier" };
var e2 = { person: p2, company: c1, position: "Developer" };
var e3 = { person: p3, company: c1, position: "Study Coach" };
var l1 = [p1, p2, p3];
var l2 = [e1, e2, e3];
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
/*
let select = function<T, U>(toSelect: T, from: U[]) : T[]{
    let list : T[] = []
    
    from.forEach(element => list.push(element))

    return list
}
*/
var select = function (toSelect, from) {
    var returnList = [];
    var checkerType;
    from.forEach(function (element) {
        if (types_1.checkTypeValidity(typeof (toSelect.f(element)), typeof (checkerType)))
            returnList.push(toSelect.f(element));
        else
            throw new Error('Type error!');
    });
    return returnList;
};
var include = function (toSelect, from) {
    var returnList = [];
    //let checkerType: U
    from.forEach(function (element) {
        returnList.push([element, toSelect.f(element)]);
    });
    return returnList;
};
//#endregion
var nL1 = select(Fun(function (x) { return x.name; }), l1);
var pL1 = select(Fun(function (x) { return x.person; }), l2);
var nL2 = select(Fun(function (x) { return x.person.name; }), l2);
var iL1 = include(Fun(function (x) { return x.person; }), l2);
//console.log(getName(p1))
//console.log(getName(p2))
//console.log(getNameFromEmployee(e3))
//console.log(nL1[0])
//console.log(pL1[0])
//console.log(nL2[2])
console.log(iL1[0][0].position + " " + iL1[0][1].name);
