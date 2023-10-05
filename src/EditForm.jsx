import React, { useState, useEffect } from 'react'

const editForm = (props) => {

const [user, setUser] = useState(props.currentUser);

const handleInputChange = (event) => {
const {name, value} = event.target

setUser({...user, [name]: value})
}
useEffect( () => {
    setUser(props.currentUser)
}, [props])


  return (
    <>
    <div>Editar Formulario</div>
    <form action="" onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user)
    }}>
        <input type="text" 
        name="name"
        value={user.name}
        onChange={handleInputChange}
         />
         <input type="email" 
         name="email" 
         value={user.email}  
         onChange={handleInputChange}
         />
         <button onClick={props}>Actualizar</button>
    </form>
    </>
  )
}

export default editForm