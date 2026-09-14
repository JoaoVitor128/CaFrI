import { useRef } from 'react';
import Tips from '../Components/Tips'

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
          1x2<br />
          2x6<br />
          3x6<br />
          1x6<br />
          1x2<br />
          3x5<br />
          3x4<br />
          1x2<br />
        </p>
      </div>
    </div>
  )
}

export default Level03