import { useState, useEffect } from 'react';
import { getAllUsers } from '../services/userService'; // Asegúrate de importar las funciones necesarias
import User from "./User"
import { Typography } from '@material-ui/core';

const UserList = () => {
  const [usuarios, setUsuarios] = useState([]); // Estado para almacenar los usuarios
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de datos
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsuarios(data); // Actualiza el estado con los usuarios obtenidos
      } catch (error) {
        setError(error.message); // Maneja el error
      } finally {
        setLoading(false); // Marca como cargado
      }
    };

    fetchUsers();
  }, []); // El array vacío asegura que se ejecute solo al montar el componente

  if (loading) return <div>Loading...</div>; // Muestra un mensaje de carga
  if (error) return <div>Error: {error}</div>; // Muestra el error si ocurre

  return (
    <div>
      <Typography variant="h5">Usuarios:</Typography>
      {usuarios.length > 0 ? (
        usuarios.map((usuario) => (
          <User key={usuario.id || usuario.email} displayName={usuario.displayName} email={usuario.email}/>
        ))
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
};

export default UserList;
