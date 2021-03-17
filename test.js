var message = 'Hello World';
var p1 = { name: "Bill", age: 16 };
var p2 = { name: "Owen", age: 24 };
var p3 = { name: "Rick", age: 21 };
var getName = function (person) {
    if (typeof (person.name) === "string")
        return person.name;
    else
        return "Invalid name!";
};
console.log(getName(p1));
console.log(getName(p2));
console.log(getName(p3));
