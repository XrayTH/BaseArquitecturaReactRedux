import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

// Componente para rutas protegidas
const PrivateRoute = ({ element }) => {
  const user = useSelector(selectUser);
  return user ? element : <Navigate to="/login" />;
};

// Componente para rutas públicas
const PublicRoute = ({ element }) => {
  const user = useSelector(selectUser);
  return !user ? element : <Navigate to="/" />;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
      </Routes>
    </div>
  );
};

export default App;




