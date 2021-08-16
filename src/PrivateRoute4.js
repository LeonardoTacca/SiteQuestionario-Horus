import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute4 = (props) => {
  const logado = !!sessionStorage.getItem("dados");
  return logado ? <Route {...props} /> : <Redirect to="/" />;
};

export default PrivateRoute4;
