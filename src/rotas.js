import React from "react";
import { Switch, Route, Router } from "react-router";
import { History } from "../src/History";
import Login from "./Telas/Login/Login";
import ListagemQuestionario from "./Telas/ListagemQuestionario/ListagemQuestionario";
import InicioQuestionario from "./Telas/IniciarQuestionario/InicioQuestionario";
import Questionario from "./Telas/Questionario/Questionario";
import RespostaA from "./Telas/RespostaQuestionario/RespostaA/RespostaA";
import RespostaB from "./Telas/RespostaQuestionario/RespostaB/RespostaB";
import RespostaC from "./Telas/RespostaQuestionario/RespostaC/RespostaC";
import RespostaD from "./Telas/RespostaQuestionario/RespostaD/RespostaD";
import Desempate from "./Telas/QuestionarioDesempate/QuestionarioDesempate";
import PrivateRoute from "./PrivateRoute";
import PrivateRoute2 from "./PrivateRoute2";
import PrivateRoute3 from "./PrivateRoute3";
import PrivateRoute4 from "./PrivateRoute4";
import PoliticaPrivacidade from "./Telas/Politicas/Politica de Privacidade/PoliticaDePrivacidade";
import TermosdeUso from "./Telas/Politicas/Termos de Uso/TermosDeUso";
export default () => {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path="/" component={InicioQuestionario} />
        <Route exact path="/Login" component={Login} />
        <Route
          exact
          path="/PoliticaPrivacidade"
          component={PoliticaPrivacidade}
        />
        <Route exact path="/TermosDeUso" component={TermosdeUso} />
        <PrivateRoute
          exact
          path="/ListagemQuestionario"
          component={ListagemQuestionario}
        />
        <PrivateRoute2
          exact
          path="/Questionario"
          component={Questionario}
        ></PrivateRoute2>
        <PrivateRoute3
          exact
          path="/SucessoA"
          component={RespostaA}
        ></PrivateRoute3>
        <PrivateRoute3
          exact
          path="/SucessoB"
          component={RespostaB}
        ></PrivateRoute3>
        <PrivateRoute3
          exact
          path="/SucessoC"
          component={RespostaC}
        ></PrivateRoute3>
        <PrivateRoute3
          exact
          path="/SucessoD"
          component={RespostaD}
        ></PrivateRoute3>
        <PrivateRoute4
          exact
          path="/Desempate"
          component={Desempate}
        ></PrivateRoute4>
      </Switch>
    </Router>
  );
};
