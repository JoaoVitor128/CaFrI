import React from 'react'

import destinoEmMaos from "../assets/destinoEmMaos.png"

import Tips from "../Components/Tips"

const Level11 = () => {
    return (
        <div>
            <h1>Fiori di 400 periodi</h1>
            <Tips text="pequeno tonel"/>
            <div className="container">
                <img src={destinoEmMaos} alt="" />
                <p className='secondary'>"Expresso aqui minha adimiração ao Alef 5 do Paralelo, apenas siga seu padrão"</p>
            </div>
        </div>
    )
}

export default Level11