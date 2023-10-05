const UserTable = (props) => {
    return (
        <>
            <table className="table p-3 mt-3">
                <thead className="border table-primary">
                    <tr>
                        <th> NOMBRE</th>
                        <th> USUARIO</th>
                        <th> ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                 
                {
                    props.users.length > 0 ? (
                        props.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => {
                                        props.editRow(user)
                                    }}>Editar</button>
                                    <button className="btn btn-danger" onClick={() => props.deleteUser(user.id)}>Eliminar</button>
                                    </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}> No hay usuarios cargados</td>
                        </tr>
                    )
                }



                     
                   {/* <tr>
                    <td>Uno </td>
                    <td> Dos </td>
                    <td> 
                    <div className="row">
                    <button>Editar</button>
                    <button>Eliminar</button>
                        </div>
                    </td>
                </tr>  */}
                </tbody>

            </table>
        </>
    )
}

export default UserTable;