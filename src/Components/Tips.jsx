import React, { useState } from 'react'
import "./Tips.css"

const Tips = ({ text}) => {

  let [tip, setTip] = useState("hidden")
  const handleClick = () => {
    if (tip == "hidden") setTip("visible")
    if (tip == "visible") setTip("hidden")

    console.log(tip);

  }
  return (
    <>
      <button className="hint" onClick={() => handleClick()}>Dica</button>
      <div className={`tip ${tip}`}>
        <h2>Dica</h2>
        <p className='secondary'>{text}</p>
      </div>
    </>
  )
}

export default Tips