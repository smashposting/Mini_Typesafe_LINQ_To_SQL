export type Person =
{
    name: string,
    age: number,
}

export type Employee =
{
    person: Person,
    company: Company,
    position: string
}

export type Company =
{
    name: string,
    location: string
}

export type Pair<A, B> = [A, B]

export let checkTypeValidity = function<T, U>(toCheck: T, mustBe: U) : boolean
{
    return typeof(toCheck) === typeof(mustBe)
}