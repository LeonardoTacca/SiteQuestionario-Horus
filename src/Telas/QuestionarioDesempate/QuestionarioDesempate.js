import React from "react";
import Style from "./QuestionarioDesempate.module.css";
import { useCallback, useState, useEffect } from "react";
import Axios from "axios";
import { History } from "../../History";

function Desempate() {
  const [Grupocheck1, setcheck] = useState("");
  const [Grupocheck2, setcheck2] = useState("");
  const [Grupocheck3, setcheck3] = useState("");
  let [MostrarD, SetMostrarD] = useState(false);
  let [MostrarA, SetMostrarA] = useState(false);
  let [MostrarB, SetMostrarB] = useState(false);
  let [MostrarC, SetMostrarC] = useState(false);
  const [erro, seterro] = useState(false);
  let Alternativa = "";
  let dados = [];
  var a = [];
  var b = [];
  var c = [];
  var d = [];
  var arrayFiltrado = false;

  const filtrarDados = useCallback(() => {
    let novodados = [];
    novodados.unshift(Grupocheck1, Grupocheck2, Grupocheck3);

    if (arrayFiltrado == false) {
      a = novodados.filter((itens) => itens.includes("a"));
      b = novodados.filter((itens) => itens.includes("b"));
      c = novodados.filter((itens) => itens.includes("c"));
      d = novodados.filter((itens) => itens.includes("d"));
      if (a.length > b.length && a.length > c.length && a.length > d.length) {
        Alternativa = "A";

        sessionStorage.setItem("Sucesso", "Sucesso");
        History.push("/SucessoA");
        SalvarDadosBanco();
      } else if (
        b.length > a.length &&
        b.length > c.length &&
        b.length > d.length
      ) {
        Alternativa = "B";
        sessionStorage.setItem("Sucesso", "Sucesso");
        SalvarDadosBanco();
        History.push("/SucessoB");
      } else if (
        c.length > a.length &&
        c.length > b.length &&
        c.length > d.length
      ) {
        Alternativa = "C";
        sessionStorage.setItem("Sucesso", "Sucesso");
        SalvarDadosBanco();
        History.push("/SucessoC");
      } else if (
        d.length > a.length &&
        d.length > b.length &&
        d.length > c.length
      ) {
        Alternativa = "D";
        sessionStorage.setItem("Sucesso", "Sucesso");
        SalvarDadosBanco();
        History.push("/SucessoD");
      }
    }
  }, [dados, Grupocheck1, Grupocheck2, Grupocheck3, a, b, c, d]);

  const validarValores = useCallback(
    (evt) => {
      evt.preventDefault();
      if (Grupocheck1 !== "") {
        seterro(false);
        if (Grupocheck2 !== "") {
          seterro(false);
          if (Grupocheck3 !== "") {
            seterro(false);
            filtrarDados();
          } else {
            seterro(true);
          }
        } else {
          seterro(true);
        }
      } else {
        seterro(true);
      }
    },
    [Grupocheck1, Grupocheck2, Grupocheck3, filtrarDados]
  );
  let inicio = true;
  async function SalvarDadosBanco() {
    var nome = sessionStorage.getItem("nome");
    var telefone = sessionStorage.getItem("telefone");
    var cidade = sessionStorage.getItem("cidade");
    var dadosapi = {
      nome: nome,
      telefone: telefone,
      cidade: cidade,
      resposta: Alternativa,
    };
    var dadosJson = JSON.stringify(dadosapi);

    Axios.post(
      "https://globalsoft-solucoes.com.br:2259/Resposta/CadastrarResposta",
      dadosJson,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (response.status === 201) {
        }
      })
      .catch((erro) => {});
  }
  const PegarValorAoIniciar = useEffect(() => {
    if (inicio === true) {
      var dados1 = sessionStorage.getItem("dados");
      var dados2 = dados1.split(",");

      a = dados2.filter((itens) => itens.includes("a"));
      b = dados2.filter((itens) => itens.includes("b"));
      c = dados2.filter((itens) => itens.includes("c"));
      d = dados2.filter((itens) => itens.includes("d"));
      if (
        a.length >= b.length &&
        a.length >= c.length &&
        a.length >= d.length
      ) {
        SetMostrarA(true);
      }
      if (
        b.length >= a.length &&
        b.length >= c.length &&
        b.length >= d.length
      ) {
        SetMostrarB(true);
      }
      if (
        c.length >= a.length &&
        c.length >= b.length &&
        c.length >= d.length
      ) {
        SetMostrarC(true);
      }
      if (
        d.length >= a.length &&
        d.length >= b.length &&
        d.length >= c.length
      ) {
        SetMostrarD(true);
      }
      inicio = false;
    }
  });
  return (
    <div>
      <div className={Style.divTextoDesempate}>
        <h3>
          Bom, ocorreu um empate nas perguntas anteriores, responda estas
          perguntas para que possamos lhe indicar uma área de atuação
        </h3>
      </div>
      <form className={Style.form} onSubmit={validarValores}>
        <div className={Style.ContainerCheck}>
          <label>13)Quase sempre você gosta de:</label>
          {MostrarA && (
            <div className={Style.blockCheck}>
              <div className={Style.divCheck}>
                <div className={Style.divInputCheck}>
                  <input
                    id="rd-01"
                    value="a"
                    checked={Grupocheck1 === "a"}
                    type="radio"
                    onChange={(evt) => {
                      setcheck(evt.target.value);
                    }}
                  />
                  <label htmlFor="rd-01" className={Style.labelQuestionario}>
                    Causar impacto: os "holofotes" o atraem
                  </label>
                </div>
              </div>
            </div>
          )}
          {MostrarB && (
            <div className={Style.blockCheck}>
              <div className={Style.divCheck}>
                <div className={Style.divInputCheck}>
                  <input
                    id="rd-02"
                    value="b"
                    checked={Grupocheck1 === "b"}
                    type="radio"
                    onChange={(evt) => {
                      setcheck(evt.target.value);
                    }}
                  />
                  <label htmlFor="rd-02" className={Style.labelQuestionario}>
                    Ser visto como um membro valioso de um grupo
                  </label>
                </div>
              </div>
            </div>
          )}
          {MostrarC && (
            <div className={Style.blockCheck}>
              <div className={Style.divCheck}>
                <div className={Style.divInputCheck}>
                  <input
                    id="rd-03"
                    value="c"
                    checked={Grupocheck1 === "c"}
                    type="radio"
                    onChange={(evt) => {
                      setcheck(evt.target.value);
                    }}
                  />
                  <label htmlFor="rd-03" className={Style.labelQuestionario}>
                    Sonhar em transformar o mundo
                  </label>
                </div>
              </div>
            </div>
          )}
          {MostrarD && (
            <div className={Style.blockCheck}>
              <div className={Style.divCheck}>
                <div className={Style.divInputCheck}>
                  <input
                    id="rd-04"
                    value="d"
                    checked={Grupocheck1 === "d"}
                    type="radio"
                    onChange={(evt) => {
                      setcheck(evt.target.value);
                    }}
                  />
                  <label htmlFor="rd-04" className={Style.labelQuestionario}>
                    Desvendar um enigma, ou inventar algo util
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={Style.ContainerCheck}>
          <label>14)Voce gostaria de ser:</label>
          {MostrarA && (
            <div className={Style.blockCheck}>
              <div className={Style.divCheck}>
                <div className={Style.divInputCheck}>
                  <input
                    id="rd-05"
                    value="a"
                    checked={Grupocheck2 === "a"}
                    type="radio"
                    onChange={(evt) => {
                      setcheck2(evt.target.value);
                    }}
                  />
                  <label htmlFor="rd-05" className={Style.labelQuestionario}>
                    Um craque na profissão que escolher
                  </label>
                </div>
              </div>
            </div>
          )}
          {MostrarB && (
            <div className={Style.blockCheck}>
              <div className={Style.divCheck}>
                <div className={Style.divInputCheck}>
                  <input
                    id="rd-06"
                    value="b"
                    checked={Grupocheck2 === "b"}
                    type="radio"
                    onChange={(evt) => {
                      setcheck2(evt.target.value);
                    }}
                  />
                  <label htmlFor="rd-06" className={Style.labelQuestionario}>
                    Um executivo bem-sucedido
                  </label>
                </div>
              </div>
            </div>
          )}
          {MostrarC && (
            <div className={Style.blockCheck}>
              <div className={Style.divCheck}>
                <div className={Style.divInputCheck}>
                  <input
                    id="rd-07"
                    value="c"
                    checked={Grupocheck2 === "c"}
                    type="radio"
                    onChange={(evt) => {
                      setcheck2(evt.target.value);
                    }}
                  />
                  <label htmlFor="rd-07" className={Style.labelQuestionario}>
                    Um profissional de prestígio
                  </label>
                </div>
              </div>
            </div>
          )}
          {MostrarD && (
            <div className={Style.blockCheck}>
              <div className={Style.divCheck}>
                <div className={Style.divInputCheck}>
                  <input
                    id="rd-08"
                    value="d"
                    checked={Grupocheck2 === "d"}
                    type="radio"
                    onChange={(evt) => {
                      setcheck2(evt.target.value);
                    }}
                  />
                  <label htmlFor="rd-08" className={Style.labelQuestionario}>
                    Um especialista ou cientista
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={Style.ContainerCheck}>
          <label>15)Gosta quando as pessoas:</label>
          {MostrarA && (
            <div className={Style.blockCheck}>
              <div className={Style.divCheck}>
                <div className={Style.divInputCheck}>
                  <input
                    id="rd-09"
                    value="a"
                    checked={Grupocheck3 === "a"}
                    type="radio"
                    onChange={(evt) => {
                      setcheck3(evt.target.value);
                    }}
                  />
                  <label htmlFor="rd-09" className={Style.labelQuestionario}>
                    O surpreendem com um presente
                  </label>
                </div>
              </div>
            </div>
          )}
          {MostrarB && (
            <div className={Style.blockCheck}>
              <div className={Style.divCheck}>
                <div className={Style.divInputCheck}>
                  <input
                    id="rd-10"
                    value="b"
                    checked={Grupocheck3 === "b"}
                    type="radio"
                    onChange={(evt) => {
                      setcheck3(evt.target.value);
                    }}
                  />
                  <label htmlFor="rd-10" className={Style.labelQuestionario}>
                    Expressam gratidão por algo que fez
                  </label>
                </div>
              </div>
            </div>
          )}
          {MostrarC && (
            <div className={Style.blockCheck}>
              <div className={Style.divCheck}>
                <div className={Style.divInputCheck}>
                  <input
                    id="rd-11"
                    value="c"
                    checked={Grupocheck3 === "c"}
                    type="radio"
                    onChange={(evt) => {
                      setcheck3(evt.target.value);
                    }}
                  />
                  <label htmlFor="rd-11" className={Style.labelQuestionario}>
                    Reconhecem sua personalidade singular
                  </label>
                </div>
              </div>
            </div>
          )}
          {MostrarD && (
            <div className={Style.blockCheck}>
              <div className={Style.divCheck}>
                <div className={Style.divInputCheck}>
                  <input
                    id="rd-12"
                    value="d"
                    checked={Grupocheck3 === "d"}
                    type="radio"
                    onChange={(evt) => {
                      setcheck3(evt.target.value);
                    }}
                  />
                  <label htmlFor="rd-12" className={Style.labelQuestionario}>
                    Reconhecem sua inteligencia
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
        {erro ? (
          <p>Voce esqueceu de marcar a resposta de alguma pergunta</p>
        ) : (
          <></>
        )}

        <div className={Style.DivBotaoEnviar}>
          <button className={Style.botaoEnviar} type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
export default Desempate;
