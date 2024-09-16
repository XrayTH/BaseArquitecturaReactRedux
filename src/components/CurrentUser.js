import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logoutUser } from './../features/userSlice';
import { logout } from "./../features/authSlice";

const CurrentUser = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(logoutUser());
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Typography variant="h5">Usuario actual: {user.displayName}</Typography>
      <button onClick={handleLogout}>Cerrar Sesión</button>
      <p>--------------------------------------------------</p>
    </div>
  );
};

export default CurrentUser;

