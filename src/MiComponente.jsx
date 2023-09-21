import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const MiComponent = () => {
  const [field, setField] = useState('');
  const [fieldNombre, setFieldNombre] = useState('');

  function handleChange(e) {
    setField(e.target.value)
    // const input = document.getElementById('id').value
  }
  function handleChangeNombre(e) {
    setFieldNombre(e.target.value)
    // const input = document.getElementById('id').value
  }

  return (
    <> 
    <h2 className='text-success'>Formulario de contacto</h2>
   <Form action="">
<div className='mb-3'>
    <label htmlFor="message">Mensaje: </label>
    <input type="text" id='message' name='message' onChange={handleChange} value={field} placeholder='ingresa algo' className='form-control'/>
</div>
<div className='mb-3'>
    <label htmlFor="message">nombre: </label>
    <input type="text" id='message' name='message' onChange={handleChangeNombre} value={fieldNombre} placeholder='ingresa algo' className='form-control'/>
</div>
    
   </Form>
   

    </>
  )
}

export default MiComponent;