type Person<a> =
{
    name: a,
    age: number
}

let message: string = 'Hello World';

let p1 : Person<string> = {name: "Bill", age: 16}
let p2 : Person<string> = {name: "Owen", age: 24}
let p3 : Person<string> = {name: "Rick", age: 21}

let getName =
    function(person : Person<string>) : string {
        if(typeof(person.name) === "string")
            return person.name
        else
            return "Invalid name!"
    }

console.log(getName(p1));
console.log(getName(p2));
console.log(getName(p3));