import React, { useState } from "react";

import MaskedInput from "react-text-mask";
import Style from "../IniciarQuestionario/inicioQuestionario.module.css";
import { History } from "../../History";
function InicioQuestionario() {
  const [telefone, settelefone] = useState("");
  const [nome, setnome] = useState("");
  const [cidade, setcidade] = useState("");
  const [errornome, seterronome] = useState(false);
  const [erroridade, seterroidade] = useState(false);
  const [errortelefone, seterrotelefone] = useState(false);

  function validar(evt) {
    evt.preventDefault();
    if (nome === "") {
      seterronome(true);
    } else if (cidade === "") {
      seterroidade(true);
    } else if (telefone.length < 15) {
      seterronome(false);
      seterrotelefone(true);
    } else {
      seterrotelefone(false);
      sessionStorage.setItem("nome", nome);
      sessionStorage.setItem("telefone", telefone);
      sessionStorage.setItem("cidade", cidade);
      History.push("/Questionario");
    }
  }

  return (
    <div className={Style.ContainerGeralInicioQuestionario}>
      <div className={Style.ContainerEnunciadoQuestionario}>
        <h1 className={Style.TextoEnunciadoQuestionario}>
          Este questionário tem como intuito tirar algumas de suas dúvidas sobre
          sua carreira.
          <br />
          Preencha este formulário com o que realmente condiz com seus
          pensamentos.
        </h1>
      </div>
      <div>
        <div className={Style.labelEnunciado}>
          <label>
            Prencha abaixo com seu nome e telefone para que possamos entrar em
            contato com voce!
          </label>
        </div>
        <div className={Style.ContainerForm}>
          <form onSubmit={validar} className={Style.FormInputs}>
            <div>
              <h4>Qual seu nome?</h4>
              <input
                value={nome}
                onChange={(evt) => {
                  setnome(evt.target.value);
                }}
                type="text"
                className={Style.inputInicioQuestionario}
              ></input>
              {errornome && <p>Nome não preenchido</p>}
            </div>
            <div>
              <h4>Qual sua cidade?</h4>
              <input
                value={cidade}
                onChange={(evt) => {
                  setcidade(evt.target.value);
                }}
                type="text"
                className={Style.inputInicioQuestionario}
              ></input>
              {erroridade && <p>Cidade Não Preenchida</p>}
            </div>
            <div>
              <h4>
                Qual seu numero de celular?Para entrarmos em contato com você!
              </h4>
              <MaskedInput
                autoComplete="off"
                value={telefone}
                onChange={(evt) => {
                  settelefone(evt.target.value);
                }}
                type="text"
                className={Style.inputInicioQuestionario}
                mask={[
                  "(",
                  /[0-9]/,
                  /[0-9]/,
                  ")",
                  " ",
                  /[0-9]/,
                  /[0-9]/,
                  /[0-9]/,
                  /[0-9]/,
                  /[0-9]/,
                  "-",
                  /[0-9]/,
                  /[0-9]/,
                  /[0-9]/,
                  /[0-9]/,
                ]}
              ></MaskedInput>
              {errortelefone && <p>Telefone não preenchido ou muito curto</p>}
            </div>
            <div className={Style.ContainerBTNiniciarQuestionario}>
              <button type="submit" className={Style.BTNiniciarQuestionario}>
                Iniciar Questionario
              </button>
            </div>
            <div>
              <h8>
                Clicando em Iniciar Questionario, você esta concordando com
                nossos
                <a href="/TermosDeUso">Termos de uso</a>e com a nossa
                <a href="/PoliticaPrivacidade">Politica de Privacidade</a>
              </h8>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default InicioQuestionario;
