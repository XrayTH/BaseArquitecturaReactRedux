import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { setUser } from '../features/userSlice';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, auth } from '../utils/firebase';
import { createUser, getUserByEmail } from './../services/userService';
import bcrypt from 'bcryptjs';
//import { useNavigate } from 'react-router-dom';


// Función para cifrar contraseñas usando bcryptjs
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10); // Genera un "salt" con 10 rondas
    const hashedPassword = await bcrypt.hash(password, salt); // Cifra la contraseña con el "salt"
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw new Error('Error hashing password');
  }
};

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState(''); // Para el nombre de usuario
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const handleAuth = async () => {
    try {
      let user;
      if (isRegistering) {
        // Cifra la contraseña antes de crear el usuario
        const hashedPassword = await hashPassword(password);
  
        // Registro de usuario en Firebase
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        user = userCredential.user;
        
        // Crear el usuario en la base de datos con la contraseña cifrada
        const userData = { email, displayName, password: hashedPassword };
        await createUser(userData);
        //navigate("/")
      } else {
        // Inicio de sesión en Firebase
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        user = userCredential.user;
        //navigate("/")
      }
  
      // Consulta al backend para obtener la información del usuario
      const userData = await getUserByEmail(email);
  
      // Almacena la información del usuario en Redux sin la contraseña
      dispatch(login({ uid: user.uid, email: user.email }));
      dispatch(setUser({ ...userData, password: undefined })); // Asegúrate de no guardar la contraseña en el estado
    } catch (error) {
      setError(error.message);
    }
  };
  

  return (
    <div>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {isRegistering && (
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Display Name"
          />
        )}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="button" onClick={handleAuth}>
          {isRegistering ? 'Register' : 'Login'}
        </button>
        <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Switch to Login' : 'Switch to Register'}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
