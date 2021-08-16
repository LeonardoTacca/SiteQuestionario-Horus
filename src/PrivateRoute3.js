import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute3 = (props) => {
  const logado = !!sessionStorage.getItem("Sucesso");
  return logado ? <Route {...props} /> : <Redirect to="/" />;
};

export default PrivateRoute3;
