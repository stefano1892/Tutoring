import { useCallback, useState } from 'react'
import { getDegrees } from './api'

function App() {
  const [count, setCount] = useState(0)
  const [degree, setDegree] = useState(0)

  const onClickHandler = useCallback(() => {
    setCount(count => count + 1)
  }, [setCount])

  const onDegreeHandler = useCallback(() => {
    getDegrees('Milano')
      .then(setDegree)
      .catch(() => setDegree(-1))
  }, [setDegree])

  return (
    <>
      <button onClick={onClickHandler}>Incrementa</button>
      <p>Contatore: {count}</p>    
      <button onClick={onDegreeHandler}>Trova temperatura</button>
      <p>Temperatura: {degree}</p>
    </>
  )
}

export default App
