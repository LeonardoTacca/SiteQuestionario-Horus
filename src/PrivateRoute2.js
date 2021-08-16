import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute2 = (props) => {
  const logado = !!sessionStorage.getItem("nome");
  return logado ? <Route {...props} /> : <Redirect to="/" />;
};

export default PrivateRoute2;
