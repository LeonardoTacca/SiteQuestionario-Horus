import React from "react";
import { History } from "../../History";
import { useForm } from "react-hook-form";
import Axios from "axios";
import Style from "./Login.module.css";
var dados = {};
var dadosapi = {};
var dadosUser = {};
function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {
    dados = data;

    dadosapi = login();
  };

  async function login() {
    Axios.post(
      "https://globalsoft-solucoes.com.br:2259/Usuario/LogarUsuario",
      (dadosapi = JSON.stringify(dados)),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        dadosUser = response.data;
        var token = dadosUser.token;
        if (response.status === 200) {
          sessionStorage.setItem("token", "Bearer " + token);
          History.push("/ListagemQuestionario");
        }
      })
      .catch((erro) => {});
  }
  return (
    <div className={Style.DivGeral}>
      <div className={Style.DivLogo}></div>
      <form className={Style.formLogin} onSubmit={handleSubmit(onSubmit)}>
        <label className={Style.labelLogin}>Email</label>
        <input
          name="email"
          type="email"
          className={Style.input}
          ref={register({ required: true })}
        />
        {errors.email && <p>Email não preenchido</p>}
        <label className={Style.labelLogin}>Senha</label>
        <input
          name="senha"
          className={Style.input}
          type="password"
          ref={register({ required: true })}
        />
        {errors.senha && <p>Senha não preenchida</p>}
        <div className={Style.DivBotaoLogin}>
          <button className={Style.botaoEntrar} type="submit">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
