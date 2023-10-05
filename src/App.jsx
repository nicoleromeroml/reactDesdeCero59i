import './App.css'
import Navbar from './Navbar'
import Formulario from './Formulario';
import { Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserTable from './Table';
import FormCrud from './Formu';
import EditForm from './EditForm';


function App() {

  const userData = [
    { id: 1, name: 'Juan', email: 'juan@gmail.com' },
    { id: 2, name: 'sofia', email: 'sofia@gmail.com' },
    { id: 3, name: 'ignacio', email: 'ignacio@gmail.com' }
  ]

  
    const initialFormState = {
      id: null,
      name: '',
      email: ''
  }
  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)


  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const editRow = (user) =>{
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, email: user.email })

  }


  const updateUser = (id, updateUser) => {
setCurrentUser(false);
setUsers(users.map((user) => (user.id === id ? updateUser : user)))

  }

  return (
    <>
      <div className='row'>

        {editing? (
          <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12'>
          <h2> Editando</h2>
          <EditForm setEditing={setEditing} updateUser={updateUser} currentUser={currentUser}/>
        </div>
        ) : (

          <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12'>
             <>creando</>
          <FormCrud addUser={addUser} />
    </div>
         
        )}
      
        <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12'>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </>
  )
}
export default App
