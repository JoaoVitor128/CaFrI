import React from 'react'

import level03 from "../assets/level03.png"

const Level03 = () => {
  return (
    <div>
      <h1>Level 03 - Fonte</h1>
      <div className="container">
        <img src={level03} alt="" className='level03'/>
        <p className="secondary">O que a por trás do CaFrI?</p>
      </div>
    </div>
  )
}

export default Level03