import { useState } from 'react';
import './App.css'

function App() {

  const [id, setId] = useState('')

  const play = event => {
    setId(event.target.innerText)
    var audio = document.getElementById(event.target.innerText);
    audio.play()
  }

const keyPlay = (id) => {
  setId(id)
  var audio = document.getElementById(id);
  audio.play()
}

  window.onkeydown = (event) => {
  switch (event.key) {
    case 'Q':
      keyPlay('Q')
      break;
    case 'W':
      keyPlay('W')
      break;
    case 'E':
      keyPlay('E')
      break;
    case 'A':
      keyPlay('A')
      break;
    case 'S':
      keyPlay('S')
      break;
    case 'D':
      keyPlay('D')
      break;
    case 'Z':
      keyPlay('Z')
      break;
    case 'X':
      keyPlay('X')
      break;
    case 'C':
      keyPlay('C')
      break;
  }
 }
  
  return (
    <div id='drum-machine'>
      <div id='button-bg'>
        <div id="buttons">
          <button className="drum-pad" id='heater-1' onClick={play}>
            <audio className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id='Q'></audio>
            Q
          </button>
          <button className="drum-pad" id='heater-2' onClick={play}>
            <audio className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' id='W'></audio>
            W
          </button>
          <button className="drum-pad" id='heater-3' onClick={play}>
            <audio className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' id='E'></audio>
            E
          </button>
          <button className="drum-pad" id='heater-4' onClick={play}>
            <audio className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' id='A'></audio>
            A
          </button>
          <button className="drum-pad" id='clap' onClick={play}>
            <audio className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' id='S'></audio>
            S
          </button>
          <button className="drum-pad" id='open-hh' onClick={play}>
            <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id='D'></audio>
            D
          </button>
          <button className="drum-pad" id='kick-n-hat' onClick={play}>
            <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id='Z'></audio>
            Z
          </button>
          <button className="drum-pad" id='kick' onClick={play}>
            <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id='X'></audio>
            X
          </button>
          <button className="drum-pad" id='closed-hh' onClick={play}>
            <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id='C'></audio>
            C
          </button>
        </div>
        <div id="display">
          {id}
        </div>
      </div>
    </div>
  )
}

export default App