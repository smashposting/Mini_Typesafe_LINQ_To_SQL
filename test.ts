import {Person, Employee, Company, checkTypeValidity} from './types'

//#region Variables
let p1 : Person = {name: "Bill", age: 16}
let p2 : Person = {name: "Owen", age: 24}
let p3 : Person = {name: "Rick", age: 21}

let e1 : Employee = {person: p1, position: "Cashier"}
let e2 : Employee = {person: p2, position: "Developer"}
let e3 : Employee = {person: p3, position: "Study Coach"}
//#endregion

//#region Methods
let getName = function(person : Person) : string 
{
    if(checkTypeValidity(person.name, "string"))
        return person.name
    else
        throw new Error("Invalid type!")
}

let getNameFromEmployee = function(employee: Employee) : string
{
    if(checkTypeValidity(employee.person.name, "string"))
        return employee.person.name
    else
        throw new Error("Invalid type!")
}
//#endregion

console.log(getName(p1));
console.log(getName(p2));
console.log(getName(p3));