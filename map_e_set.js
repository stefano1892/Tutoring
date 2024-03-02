const numbers = new Set([1, 2, 3, 2, 1, 2, 3, 4, 5, 1, 2]).values()

numbers.add(1)
numbers.clear()
numbers.entries()
numbers.values()

const map = new Map([
    ['name', 'giorgio'],
    ['age', 32]
]) // --> Object.entries(oggetto)

map.set('key', 'value')
const value = map.get('key')
const hasItem = map.has('key')
map.keys() // ['key'] --> Object.keys({key: 'value'})
map.values() // ['value'] --> Object.values({key: 'value'})
const test = { name: 'giorgio', age: 32 }

delete test.name