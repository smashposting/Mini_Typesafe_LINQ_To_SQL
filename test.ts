import {Person, Employee, Company, Pair, checkTypeValidity} from './types'

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
let select = function<T, U>(toSelect: Fun<T, U>, from: T[]) : U[]
{
    let returnList: U[] = []
    let checkerType: U

    from.forEach(element => {
        if(checkTypeValidity(typeof(toSelect.f(element)), typeof(checkerType)))
            returnList.push(toSelect.f(element))
        else
            throw new Error('Type error!')
    })
    return returnList
}

/*
Takes attached item as input
Applies function on input
Returns output
*/
let id = <T>() : Fun<T, T> => Fun(x => x)

let Select = <T, U>(f:Fun<T, U>) : Fun<T, U> => {
  let returnList : U[]

  return Fun(c => f.f(c))
}

let include = function<T, U>(toSelect: Fun<T, U>, from: T[]) : Pair<T,U>[]
{
    let returnList: Pair<T,U>[] = []
    //let checkerType: U

    from.forEach(element =>
        {
            returnList.push([element,toSelect.f(element)])
        })

    return returnList
}

let Include = <T, U, V>(f: Fun<T, Pair<U, V>) : Fun<T, U> => { //WIP
  return Fun(x => f.f(x))
}
//#endregion

let nL1 : string[] = select<Person, string>(Fun(x => x.name), l1)
let pL1 : Person[] = select<Employee, Person>(Fun(x => x.person), l2)
let nL2 : string[] = select<Employee, string>(Fun(x => x.person.name), l2)

let iL1 : Pair<Employee, Person>[] = include<Employee, Person>(Fun(x => x.person), l2)

let nameList1 : string[] = id<Person[]>().then(Select(Fun(x => x.map(x => x.name)))).f(l1)
let nameList2 : string[] = Select<Person[], string[]>(Fun(x => x.map(x => x.name))).f(l1)
console.log(nameList1);
console.log(nameList2);

let nameAgePairList1 : Pair<string, number>[] = Include<Person[], string[], number[]>(Fun()) //WIP

//console.log(getName(p1))
//console.log(getName(p2))
//console.log(getNameFromEmployee(e3))
//console.log(nL1[0])
//console.log(pL1[0])
//console.log(nL2[2])
//console.log(iL1[0][0].position + " " + iL1[0][1].name)