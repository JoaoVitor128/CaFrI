import React from 'react'
import Tips from '../Components/Tips'

import anatomia from "../assets/anatomia.png"

const Level09 = () => {
  return (
    <div>
      <h1>Level 09 - Estado de sua pintura</h1>
      <Tips text="Esse autor se considera um escultor, por não ter uma pintura avivada" />
      <div className="container">
        <img src={anatomia} alt="" />
        <p className="secondary">Poema de acapela</p>
      </div>
    </div>
  )
}

export default Level09