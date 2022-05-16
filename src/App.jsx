import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Contador } from './components/Contador/Contador'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  const [counter, setCounter] = useState(0)
  const [mensaje, setMensaje] = useState('')
  // let counter = 0;

  const aumentar = () => {

    setCounter(counter + 5)
    setMensaje('');
  }

  const disminuir = () => {
    if (counter > 0) {
      setCounter(counter - 1)

    } else {
      setMensaje('Limite inferior 0')
    }
  }

  // function aumentar (){
  //   setCounter(counter+1)
  // }

  return (
    <>
      <div className="App">
        <Navbar
          counter={counter}
        />
        <Contador
          counter={counter}
          aumentar={aumentar}
          disminuir={disminuir}
          mensaje={mensaje}
        />

      </div>

    </>
  )
}

export default App
