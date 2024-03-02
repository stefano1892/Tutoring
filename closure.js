const numbers = [1, 2, 3]

const numbersBy2 = numbers.map(n => n * 2)
const numbersBy3 = numbers.map(n => n * 3)
const numbersBy4 = numbers.map(n => n * 4)

const mapperBy2 = n => n * 2
const mapperBy3 = n => n * 3
const mapperBy4 = n => n * 4

const mapperByM = m => n => n * m

const numbersBy2 = numbers.map(mapperByM(2))
const numbersBy3 = numbers.map(mapperByM(3))
const numbersBy4 = numbers.map(mapperByM(4))


const [email, setEmail] = useState<string>('')
const [password, setPassword] = useState<string>('')

const navigate = useNavigate();

const handleChange = (setState) => (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value)
}

<input onChange={handleChange(setEmail)} />
<input onChange={handleChange(setPassword)} />