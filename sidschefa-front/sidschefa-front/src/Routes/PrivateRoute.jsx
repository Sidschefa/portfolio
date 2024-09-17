// import React from 'react';
// import { Route } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         localStorage.getItem('token')
//             ? <Component {...props} />
//             : <Redirect to='/login' />
//     )} />
// );

// export default PrivateRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Verifica se o token existe no localStorage

  return isAuthenticated ? children : <Navigate to="/" />; // Redireciona para o login se não estiver autenticado
}

export default PrivateRoute;
