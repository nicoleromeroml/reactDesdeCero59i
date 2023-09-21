import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Formulario() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });
function handleChange (e){
    const {name, value} = e.target;
    setFormData({
        [name]: value
    });

};

const handleSubmit = (e) => {
e.preventDefault();
console.log(formData)
}

    return (
        <>
        <h3>Contacto</h3>
        <Form action="" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor="nombre">Nombre:</Form.Label>
                <Form.Control 
                type="text"
                id='nombre'
                name="nombre"
                placeholder="ingrese su nombre"
                className=""
                value={formData.nombre}
                onChange={handleChange}
                 />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control
                type="email"
                id='email'
                name="email"
                placeholder="ingrese su email"
                 className="form-control"
                 value={formData.email}
                 onChange={handleChange}
                  />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="mensaje">Mensaje:</Form.Label>
                <Form.Control 
                placeholder="dejsanos tu mensaje"
                type="text"
                id='mensaje'
                name="mensaje"
                className=""
                value={formData.mensaje}
                onChange={handleChange}
                />
            </Form.Group>
            <Button variant="success" type="submit">Enviar Mensaje</Button>
        </Form>

        </>
    )
}

export default Formulario;