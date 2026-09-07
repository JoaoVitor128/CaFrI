import React from 'react'

import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='container'>
        <h1>Errado!</h1>
        <p>Mais sorte da próxima vez</p>
        <p className='secondary'>
          Good Luck.

          3301
        </p>
        <Link to="/"><button>Voltar</button></Link>
    </div>
  )
}

export default ErrorPage