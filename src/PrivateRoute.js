import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = (props) => {
  const logado = !!sessionStorage.getItem("token");
  return logado ? <Route {...props} /> : <Redirect to="/Login" />;
};

export default PrivateRoute;
