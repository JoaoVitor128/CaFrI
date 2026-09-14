import { useRef } from 'react';
import Tips from '../Components/Tips'

import level03 from "../assets/level03.png"
import nokia3310 from "../assets/nokia3310.mp3"

const Level03 = () => {
  const audioRef = useRef(new Audio(nokia3310));

  const play = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <h1>Level 03 - Tens uma nova mensagem</h1>
      <Tips text="Deve ser horrível mandar mensagem assim" />
      <div className="container">
        <div>
          <button onClick={play}>Tocar</button>
        </div>
        <p className="secondary">
          1x2
          2x6
          3x6
          1x6
          1x2
          3x5
          3x4
          1x2
        </p>
      </div>
    </div>
  )
}

export default Level03