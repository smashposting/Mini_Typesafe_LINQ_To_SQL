import {Person, Employee, Company, checkTypeValidity} from './types'

interface Fun<A, B> {
    f : (_:A) => B
    then : <C>(g:Fun<B,C>) => Fun<A,C>
}

let Fun = <A,B>(f : (_:A) => B) : Fun<A,B> =>
  ({
    f : f,
    then : function<C>(this:Fun<A,B>, g:Fun<B,C>) : Fun<A,C> {
      return then(this, g)
    }
  })

let then = <A,B,C>(f:Fun<A,B>, g:Fun<B,C>) : Fun<A,C> =>
  Fun<A,C>(a => g.f(f.f(a)))

//#region Variables
let p1 : Person = {name: "Bill", age: 16}
let p2 : Person = {name: "Owen", age: 24}
let p3 : Person = {name: "Rick", age: 21}

let c1 : Company = {name: "HR", location: "Rotterdam"}

let e1 : Employee = {person: p1, company: c1, position: "Cashier"}
let e2 : Employee = {person: p2, company: c1, position: "Developer"}
let e3 : Employee = {person: p3, company: c1, position: "Study Coach"}

let l1 : Person[] = [p1, p2, p3]
let l2 : Employee[] = [e1, e2, e3]

//#endregion

//#region Methods
/*
let select = function<T, U>(toSelect: T, from: U[]) : T[]{
    let list : T[] = []
    
    from.forEach(element => list.push(element))

    return list
}
*/

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

let select = function<T, U>(toSelect: Fun<U, T>, from: U[]) : T[]
{
    let returnList: T[] = []
    from.forEach(element => returnList.push(toSelect.f(element)))
    return returnList
}
//#endregion

let nL1 : string[] = select<string, Person>(Fun(x => x.name), l1)
let pL1 : Person[] = select<Person, Employee>(Fun(x => x.person), l2)
let nL2 : string[] = select<string, Employee>(Fun(x => x.person.name), l2)

console.log(getName(p1))
console.log(getName(p2))
console.log(getNameFromEmployee(e3))
console.log(nL1[0])
console.log(pL1[0])
console.log(nL2[2])