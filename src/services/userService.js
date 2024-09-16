import { api } from '../utils/api';

// Consultar todos los usuarios
export const getAllUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error fetching users');
  }
};

// Consultar un usuario por ID
export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error fetching user');
  }
};

// Consultar un usuario por Email
export const getUserByEmail = async (email) => {
  try {
    const response = await api.get(`/users/email/${email}`);
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error || 'Error fetching user by email');
  }
};

// Crear un nuevo usuario
export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error creating user');
  }
};

// Modificar un usuario existente
export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error updating user');
  }
};

// Borrar un usuario
export const deleteUser = async (id) => {
  try {
    await api.delete(`/users/${id}`);
    return { message: 'User deleted successfully' };
  } catch (error) {
    throw new Error(error.response.data.error || 'Error deleting user');
  }
};


