import './App.css'
// import Navbar from './Navbar'
// import MiComponent from './MiComponente'
// import Titulo from './Titulo'
import { useState } from 'react'
import Children from './Children';

function App() {
  const [fecha, setFecha] = useState('11 de septiembre');
  const [count, setCount] = useState(0)

  function cambiarFecha() {
    setFecha('12 de septiembre')

  }
const funSuma = num => {
return num + 2
}


  // const title = "Hola amigos soy un texto de props";
  // const content = "soy otro texto props"

  return (
    <>
    {/* <Children title={title} content={content} sum={funSuma}/> */}
 <button onClick={ () => setCount(count + 1)}>{count} </button>

      <h1>{fecha}</h1>
      <button onClick={cambiarFecha} variant='danger'>Click aqui</button>

    </>
  )
}
export default App
