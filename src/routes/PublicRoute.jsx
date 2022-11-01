// no es necesario implementar
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const PublicRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/app"/>;
  }

  return children;
};

export default PublicRoute;