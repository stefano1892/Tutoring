const foo = 'arianna'

const anagrafica: Record<string, number> = {
    matteo: 30,
    stefano: 32,
    sara: 29,
    '32': 1,
    [foo]: 30
}

interface Person<T, K, L> {
    name: T,
    age: K,
    address: L
}

const person: Person<string, number, string> = {
    name: 'arianna',
    //name: 1,
    // age: 32,
    age: '32',
    address: 'foo'
}

const personLimited: Person<'matteo' | 'stefano'> = {
    name: 'stefano',
    //name: 'sara'
}

// useState<Person<string, number, string>>()
// const [name, setName] = useState<Person>({})

interface PersonNullable {
    name: string,
    age?: number
}

interface PersonFull {
    name: string,
    age: number
    address: string
}

type PersonNameAddress = Pick<PersonFull, 'name' | 'address'>
const personNameAddress: PersonNameAddress = {
    name: 'arianna',
    address: 'foo',
    //age: 32
}

type PersonNameAddress2 = Omit<PersonFull, 'age'>

const personNameAddress2: PersonNameAddress2 = {
    name: 'arianna',
    address: 'foo',
    //age: 32
}

const ARIANNA: Uppercase<'arianna'> = 'ARIANNA'
const arianna: Lowercase<'ARIANNA'> = 'arianna'

type PersonPartial = Partial<PersonFull>

const personPartial: PersonPartial = {
    name: 'matteo'
}

type PersonRequired = Required<PersonPartial>

const personRequired: PersonRequired = {
    name: 'matteo'
}

const requiredExample = (personNullable: PersonNullable): Required<PersonNullable> => {
    return {
        ...personNullable,
        age: personNullable.age || 32
    }
}