// interface

interface Person1 {
    name: string;
    age: number;
}

/*
interface Person1 {
    name: string;
    age: number;
    city: string;
}
*/

const person1: Person1 = {
    name: 'John',
    age: 30,
    city: 'Milan'
}

interface Person1 {
    city: string;
}

person1.city = 'Milan'

interface Person3 extends Person1 {
    address: string
}

const person3: Person3 = {
    name: 'John',
    age: 30,
    city: 'Milan',
    address: 'Milan'
}

//type

type Person2 = {
    name: string;
    age: number;
}

type Person4 = Person2 & {
    city: string
}

const person2: Person2 = {
    name: 'John',
    age: 30,
}

type Gianfranco = Date

const person4: Person4 = {
    name: 'John',
    age: 30,
    city: 'Milan'
}

// interface and type

type Person5 = Person1 & Person2
interface Person6 extends Person1, Person2 {}

type City = 1 | 2

interface PersonCity {
    name: string;
    age: number;
    city: City;
}

const personCity: PersonCity = {
    name: 'John',
    city: 'milan'
}

type NumberOrString = number | string

const numberOrString: NumberOrString = 123
const numberOrString1: NumberOrString = 'foooo'
const numberOrString2: NumberOrString = new Date()

type ComplexPerson = Person1 | PersonCity

const complexPerson: ComplexPerson = {
    name: 'John',
    age: 30,
    city: new Date()
}

type OldPerson = {
    name: 'stefano',
    age: String
}

type YoungerPerson = {
    name: 'matteo',
    age: number
}

type VigevanoPerson = OldPerson | YoungerPerson

const vigevanoPerson: VigevanoPerson = {
    name: 'stefano',
    age: '30'
}