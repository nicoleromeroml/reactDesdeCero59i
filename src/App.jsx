import './App.css'
import Navbar from './Navbar'
import Formulario from './Formulario';
import { Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';



function App() {
  const [clicks, setClicks] = useState(0)
  const [test, setTest] = useState('hola')


  // useEffect(() => {
  //   console.log('me acabo de ejecutar')
  // })
  //!EJECUTA EL CODIGO QUE TIENE ADENTRO, EN EL MONTAJE Y EN CADA ACTUALIZACION DE ESTADO
  // useEffect(() => {
  //   console.log('me acabo de ejecutar')
  // },[test], [clicks])
  //!EJECUTA EL CODIGO QUE TIENE DENTRO, EN EL MONTAJE Y EN CADA ACTIALIZACION EN PARTICULAR, (SEGUN SE LO INDIQUEMOS CON EL ESTADO)


  useEffect(() => {
    console.log('me acabo de montar');
    return() => {
      console.log('me acabo de desmontar')
    }
  }, [clicks])
  return (
    <>

      <div>
      <h1>hola desde el app</h1>
      <button onClick={() => setClicks(clicks + 1)}>{clicks}</button>
      <button onClick={() => setTest('chau')}>{test}</button>
      </div>


   {/* <Routes> */}
        {/* <Route path='/contacto' Component={Navbar} />
        <Route path='/formulario' Component={Formulario} />
        <Route path='/componente' component={Titulo}/> */}
        {/* </Routes> */}
        {/* <Link to="/formulario">Formulario de contacto</Link>
        <Link to="/contacto">Contacto</Link> */}
    </>
  )
}
export default App
