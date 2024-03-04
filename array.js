const array = [1, '2', true]

const arrayWithZeros = new Array(10).fill(0)

[1, 2, 3].sort((a, b) => a - b)

const people = [{name: 'Matteo', age: 29}, {name: 'Stefano', age: 31}]

const people2 = people.sort((a, b) => a.age - b.age)

const people3 = people.toSorted((a, b) => a.age - b.age) //in questo modo non altero l'array principale

const arrayPari = [1,2,3]

const arrayResult = arrayPari.filter(item => item % 2 === 0)

const array2 = arrayPari.filter(item => item % 2 !== 0).map(item => item * 2)

// arrayPari.map(item => item * 2).filter(item => item % 2 !== 0)
people.filter(person => person.age > 30).map(person => ({...person, name: person.name + '!!'}))
// people.map(person => ({...person, name: person.name + '!!'})).filter(person => person.age > 30)

const meanAge = people.reduce((acc, person) => acc + person.age, 0) / people.length

const concatenatedNames = people.reduce((acc, person) => {
    const separator = acc ? ' ' : ''
    return acc + separator + person.name
}, '')

const namesReducer = (acc, person) => {
    const separator = acc ? ' ' : ''
    return acc + separator + person.name
}

const concatenatedNames2 = people.reduce(namesReducer, '')

// .then(setState)
