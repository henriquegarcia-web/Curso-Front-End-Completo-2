import React, { useState, useEffect } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Clicado ${count} vezes`
  }, [count])

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
      {count === 10 && (
        <p>Você clicou 10 vezes</p>
      )}
    </div>
  )
}

export default Counter