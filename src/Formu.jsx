import { useState } from "react";


const FormCrud = (props) => {

const initialFormState = {
    id: null,
    name: '',
    email: ''
}
const [user, setUser] = useState(initialFormState);

const handleInputChange = (event) => {
    const {name, value} = event.target
setUser({...user, [name] : value})
}



    return(
        <>
        <form  onSubmit={ event => {
            event.preventDefault();
            if(!user.name || !user.email) return
            props.addUser(user)
            setUser(initialFormState)
        }}
         className="bg bg-success p-3">
            <div className="mb-3">
            <label htmlFor="">Nombre</label>
            <input type="text"
             name="name"
            className="form-control"
            value={user.name}
            onChange={handleInputChange}
             />
            </div>
            <div className="mb-3">
            <label htmlFor="">Email</label>
            <input type="email"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleInputChange}
            />
            </div>
            <button className="btn btn-primary">Enviar</button>
        </form>
        </>
    )
}

export default FormCrud;