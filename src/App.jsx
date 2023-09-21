// import { Navbar } from './Navbar';
import './App.css'
import Navbar from './Navbar'
// import MiComponent from './MiComponente';
// import Titulo from './Titulo'
// import Children from './Children';
// import { useState } from 'react'
import Formulario from './Formulario';
import {Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'


function App() {
  // const [fecha, setFecha] = useState('11 de septiembre');
  // const [count, setCount] = useState(0)
  // function cambiarFecha() {
  //   setFecha('12 de septiembre')
  // }
  // const funSuma = num => {
  //   return num + 2
  // }
  // const title = "Hola amigos soy un texto de props";
  // const content = "soy otro texto props"

  return (
    <>

<Routes>
  <Route path='/contacto' element={Navbar}/>
  <Route path='/sobreNosotros' element={Formulario}/>
</Routes>
<Link to="/">Inicio</Link>
<Link to='/contacto'>Contacto</Link>
<Link to='/sobreNosotros' element={Formulario}>Formulario</Link>
<h1>hola desde el app</h1>
      {/* <Formulario /> */}

      {/* <MiComponent/> */}
      {/* <Children title={title} content={content} sum={funSuma}/> */}
      {/* <button onClick={ () => setCount(count + 1)}>{count} </button> */}
      {/* <h1>{fecha}</h1>
      <button onClick={cambiarFecha} variant='danger'>Click aqui</button> */}

    </>
  )
}
export default App
