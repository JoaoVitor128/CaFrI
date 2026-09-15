import { Link, useLocation } from 'react-router-dom'

import './App.css'
import { levels } from './db/levels';
import Tips from './Components/Tips';

import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';
function App() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname)
  const [currentLevel, setCurrentLevel] = useState(levels.find(level => level.path === path))

  useEffect(() => {
    setPath(location.pathname)
    setCurrentLevel(levels.find(level => level.path === path))
  }, [location.pathname])

  return (
    <div className='App'>
      {path != "/guerreiros" && path != "/final" && path != "/manha-boa" &&
        <div>
          <h1>Level 0{levels.indexOf(currentLevel) + 1} - {currentLevel.title} </h1>
          <Tips text={currentLevel.tip} />
        </div>
      }

      <Outlet />

      {path == "/guerreiros" && <Link to={"/"}><button>Voltar</button></Link>}
      {path != "/guerreiros" && <Link to={"/guerreiros"}><button>Lista de Guerreiros</button></Link>}
    </div>
  )
}

export default App
