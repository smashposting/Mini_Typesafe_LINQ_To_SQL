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

export let checkTypeValidity = function<T>(toCheck: T, mustBe: string) : boolean
{
    return typeof(toCheck) === mustBe
}