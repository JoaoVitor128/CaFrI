import React from 'react'
import Tips from '../Components/Tips'

import akerue from "../assets/akerue.png"

const Level02 = () => {
  return (
    <div>
      <h1>Level 02 - Feitiço contra feiticeiro</h1>
      <Tips text="IICSA nele mesmo é a cara da química" />
      <div className="container">
        <img src={akerue} alt="" />
        <p>aonaC ed monérP</p>
      </div>
    </div>
  )
}

export default Level02