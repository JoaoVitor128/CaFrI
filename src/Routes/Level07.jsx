import React from 'react'
import Tips from '../Components/Tips'

import level07 from '../assets/level07.png'

const Level07 = () => {
  return (
    <div>
      <h1>Level 07 - Van Gogh?</h1>
      <Tips text="Pixels de falsidade" />
      <div className="container ">
        <img src={level07} alt="" />
        <p className="secondary">00:00 - 03:00 - 06:00 - 09:00</p>
      </div>
    </div>
  )
}

export default Level07