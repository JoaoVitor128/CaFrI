import React from 'react'
import Tips from '../Components/Tips'

import funcao from '../assets/funcao.png'

const Level06 = () => {
  return (
    <div>
      <h1>Level 06 - OTUEBUIZO</h1>
      <Tips text="Colorir para revelar as chaves" />
      <div className="container ">
        <img src={funcao} alt="" />
      </div>
    </div>
  )
}

export default Level06