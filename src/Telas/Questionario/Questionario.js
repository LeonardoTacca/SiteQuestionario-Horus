import React, { useState, useCallback } from "react";
import Axios from "axios";
import Style from "./Questionario.module.css";
import { History } from "../../History";
const Questionario = () => {
  const [Grupocheck1, setcheck] = useState("");
  const [Grupocheck2, setcheck2] = useState("");
  const [Grupocheck3, setcheck3] = useState("");
  const [Grupocheck4, setcheck4] = useState("");
  const [Grupocheck5, setcheck5] = useState("");
  const [Grupocheck6, setcheck6] = useState("");
  const [Grupocheck7, setcheck7] = useState("");
  const [Grupocheck8, setcheck8] = useState("");
  const [Grupocheck9, setcheck9] = useState("");
  const [Grupocheck10, setcheck10] = useState("");
  const [Grupocheck11, setcheck11] = useState("");
  const [Grupocheck12, setcheck12] = useState("");
  const [erro, seterro] = useState(false);

  let Alternativa = "";
  async function SalvarDados() {
    var nome = sessionStorage.getItem("nome");
    var telefone = sessionStorage.getItem("telefone");
    var cidade = sessionStorage.getItem("cidade");
    var dadosapi = {
      nome: nome,
      telefone: telefone,
      cidade: cidade,
      resposta: Alternativa,
    };

    console.log(dadosapi);
    var dadosJson = JSON.stringify(dadosapi);
    console.log(dadosJson);
    Axios.post(
      "https://globalsoft-solucoes.com.br:2259/Resposta/CadastrarResposta",
      dadosJson,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (response.status === 201) {
          console.log("sucesso");
        }
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
  var dados = [];
  var a = [];
  var b = [];
  var c = [];
  var d = [];

  const enviar = useCallback(
    (evt) => {
      dados.unshift(
        Grupocheck1,
        Grupocheck2,
        Grupocheck3,
        Grupocheck4,
        Grupocheck5,
        Grupocheck6,
        Grupocheck7,
        Grupocheck8,
        Grupocheck9,
        Grupocheck10,
        Grupocheck11,
        Grupocheck12
      );

      a = dados.filter((itens) => itens.includes("a"));
      b = dados.filter((itens) => itens.includes("b"));
      c = dados.filter((itens) => itens.includes("c"));
      d = dados.filter((itens) => itens.includes("d"));

      if (
        a.length === b.length ||
        a.length === c.length ||
        a.length === d.length
      ) {
        sessionStorage.setItem("dados", dados);
        History.push("/Desempate");
      }
      if (
        b.length === a.length ||
        b.length === c.length ||
        b.length === d.length
      ) {
        sessionStorage.setItem("dados", dados);
        History.push("Desempate");
      }
      if (
        c.length === a.length ||
        c.length === b.length ||
        c.length === d.length
      ) {
        sessionStorage.setItem("dados", dados);
        History.push("/Desempate");
      }
      if (
        d.length === a.length ||
        d.length === b.length ||
        d.length === c.length
      ) {
        sessionStorage.setItem("dados", dados);
        History.push("/Desempate");
      }

      MostrarResultado();
    },
    [
      dados,
      Grupocheck1,
      Grupocheck2,
      Grupocheck3,
      Grupocheck4,
      Grupocheck5,
      Grupocheck6,
      Grupocheck7,
      Grupocheck8,
      Grupocheck9,
      Grupocheck10,
      Grupocheck11,
      Grupocheck12,
      a,
      b,
      c,
      d,
    ]
  );
  const MostrarResultado = useCallback((evt) => {
    if (a.length > b.length && a.length > c.length && a.length > d.length) {
      Alternativa = "A";
      sessionStorage.setItem("Sucesso", "Sucesso");
      History.push("/SucessoA");
      SalvarDados();
    } else if (
      b.length > a.length &&
      b.length > c.length &&
      b.length > d.length
    ) {
      Alternativa = "B";
      sessionStorage.setItem("Sucesso", "Sucesso");
      SalvarDados();
      History.push("/SucessoB");
    } else if (
      c.length > a.length &&
      c.length > b.length &&
      c.length > d.length
    ) {
      Alternativa = "C";
      sessionStorage.setItem("Sucesso", "Sucesso");
      SalvarDados();
      History.push("/SucessoC");
    } else if (
      d.length > a.length &&
      d.length > b.length &&
      d.length > c.length
    ) {
      Alternativa = "D";
      sessionStorage.setItem("Sucesso", "Sucesso");
      SalvarDados();
      History.push("/SucessoD");
    }
  });
  const validar = useCallback(
    (evt) => {
      evt.preventDefault();
      if (Grupocheck1 !== "") {
        seterro(false);
        if (Grupocheck2 !== "") {
          seterro(false);
          if (Grupocheck3 !== "") {
            seterro(false);
            if (Grupocheck4 !== "") {
              seterro(false);
              if (Grupocheck5 !== "") {
                seterro(false);
                if (Grupocheck6 !== "") {
                  seterro(false);
                  if (Grupocheck7 !== "") {
                    seterro(false);
                    if (Grupocheck8 !== "") {
                      seterro(false);
                      if (Grupocheck9 !== "") {
                        seterro(false);
                        if (Grupocheck10 !== "") {
                          seterro(false);
                          if (Grupocheck11 !== "") {
                            seterro(false);
                            if (Grupocheck12 !== "") {
                              seterro(false);
                              enviar();
                            } else {
                              seterro(true);
                            }
                          } else {
                            seterro(true);
                          }
                        } else {
                          seterro(true);
                        }
                      } else {
                        seterro(true);
                      }
                    } else {
                      seterro(true);
                    }
                  } else {
                    seterro(true);
                  }
                } else {
                  seterro(true);
                }
              } else {
                seterro(true);
              }
            } else {
              seterro(true);
            }
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
    [
      Grupocheck1,
      Grupocheck2,
      Grupocheck3,
      Grupocheck4,
      Grupocheck5,
      Grupocheck6,
      Grupocheck7,
      Grupocheck8,
      Grupocheck9,
      Grupocheck10,
      Grupocheck11,
      Grupocheck12,
      enviar,
    ]
  );

  return (
    <div>
      <form className={Style.form} onSubmit={validar}>
        <div className={Style.ContainerCheck}>
          <label>1)Na escola, você prefere assuntos ligados a:</label>
          {/*ESTE É MEU INPUT QUE UTILIZO SEM SER O COMPONENTE */}
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
                  Artes, esportes e atividades extracurriculares
                </label>
              </div>
            </div>
          </div>
          {/*ESTE É O RADIO BUTTON QUE CRIEI */}

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
                  Biologia e Genetica
                </label>
              </div>
            </div>
          </div>
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
                  Ciências humanas, idiomas
                </label>
              </div>
            </div>
          </div>
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
                  Ciencias Exatas
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.ContainerCheck}>
          <label>2)você prefere levar sua vida:</label>
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
                  Artes, esportes e atividades extracurriculares
                </label>
              </div>
            </div>
          </div>
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
                  Com regras definidas e disciplina
                </label>
              </div>
            </div>
          </div>
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
                  Interagindo com todo tipo de pessoa
                </label>
              </div>
            </div>
          </div>
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
                  Com muita autonomia: “na sua”
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.ContainerCheck}>
          <label>3) Voce se descreve como uma pessoa:</label>
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
                  Impulsiva e um tanto aventureira
                </label>
              </div>
            </div>
          </div>
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
                  Cautelosa e responsável
                </label>
              </div>
            </div>
          </div>
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
                  Entusiasmada e muito amiga
                </label>
              </div>
            </div>
          </div>
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
                  Calma
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.ContainerCheck}>
          <label>4)Voce se considera uma pessoa:</label>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-13"
                  value="a"
                  checked={Grupocheck4 === "a"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck4(evt.target.value);
                  }}
                />
                <label htmlFor="rd-13" className={Style.labelQuestionario}>
                  Prática e hábil para improvisar
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-14"
                  value="b"
                  checked={Grupocheck4 === "b"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck4(evt.target.value);
                  }}
                />
                <label htmlFor="rd-14" className={Style.labelQuestionario}>
                  Batalhadora, que sabe o que quer
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-15"
                  value="c"
                  checked={Grupocheck4 === "c"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck4(evt.target.value);
                  }}
                />
                <label htmlFor="rd-15" className={Style.labelQuestionario}>
                  Preocupada com questões humanas
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-16"
                  value="d"
                  checked={Grupocheck4 === "d"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck4(evt.target.value);
                  }}
                />
                <label htmlFor="rd-16" className={Style.labelQuestionario}>
                  Capacitada para criar e inventar
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.ContainerCheck}>
          <label>5)Quais caracteristicas suas te dão mais orgulho:</label>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-17"
                  value="a"
                  checked={Grupocheck5 === "a"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck5(evt.target.value);
                  }}
                />
                <label htmlFor="rd-17" className={Style.labelQuestionario}>
                  Audacia e facilidade em lidar com o esperado
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-18"
                  value="b"
                  checked={Grupocheck5 === "b"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck5(evt.target.value);
                  }}
                />
                <label htmlFor="rd-18" className={Style.labelQuestionario}>
                  Senso de dever e capacidade de dar exemplo
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-19"
                  value="c"
                  checked={Grupocheck5 === "c"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck5(evt.target.value);
                  }}
                />
                <label htmlFor="rd-19" className={Style.labelQuestionario}>
                  Idealismo e disposição para compreender os outros
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-20"
                  value="d"
                  checked={Grupocheck5 === "d"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck5(evt.target.value);
                  }}
                />
                <label htmlFor="rd-20" className={Style.labelQuestionario}>
                  Criatividade e rapidez mental
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.ContainerCheck}>
          <label>6)Costuma confiar mais em:</label>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-21"
                  value="a"
                  checked={Grupocheck6 === "a"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck6(evt.target.value);
                  }}
                />
                <label htmlFor="rd-21" className={Style.labelQuestionario}>
                  Percepção imediata
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-22"
                  value="b"
                  checked={Grupocheck6 === "b"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck6(evt.target.value);
                  }}
                />
                <label htmlFor="rd-22" className={Style.labelQuestionario}>
                  Costumes e tradições
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-23"
                  value="c"
                  checked={Grupocheck6 === "c"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck6(evt.target.value);
                  }}
                />
                <label htmlFor="rd-23" className={Style.labelQuestionario}>
                  Intuição
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-24"
                  value="d"
                  checked={Grupocheck6 === "d"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck6(evt.target.value);
                  }}
                />
                <label htmlFor="rd-24" className={Style.labelQuestionario}>
                  Razão e lógica
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.ContainerCheck}>
          <label>7)A vida é mais interessante quando você tem:</label>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-25"
                  value="a"
                  checked={Grupocheck7 === "a"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck7(evt.target.value);
                  }}
                />
                <label htmlFor="rd-25" className={Style.labelQuestionario}>
                  Desafios, situações diferentes
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-26"
                  value="b"
                  checked={Grupocheck7 === "b"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck7(evt.target.value);
                  }}
                />
                <label htmlFor="rd-26" className={Style.labelQuestionario}>
                  Segurança, emprego garantido, integração social
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-27"
                  value="c"
                  checked={Grupocheck7 === "c"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck7(evt.target.value);
                  }}
                />
                <label htmlFor="rd-27" className={Style.labelQuestionario}>
                  Possibilidade de fazer algo para mudar o mundo
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-28"
                  value="d"
                  checked={Grupocheck7 === "d"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck7(evt.target.value);
                  }}
                />
                <label htmlFor="rd-28" className={Style.labelQuestionario}>
                  Possibilidade de ir além do que já é conhecido
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.ContainerCheck}>
          <label>8)Você é muito bom lidando com:</label>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-29"
                  value="a"
                  checked={Grupocheck8 === "a"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck8(evt.target.value);
                  }}
                />
                <label htmlFor="rd-29" className={Style.labelQuestionario}>
                  Ferramentas, instrumentos e equipamentos
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-30"
                  value="b"
                  checked={Grupocheck8 === "b"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck8(evt.target.value);
                  }}
                />
                <label htmlFor="rd-30" className={Style.labelQuestionario}>
                  Controle do tempo, comando e execução
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-31"
                  value="c"
                  checked={Grupocheck8 === "c"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck8(evt.target.value);
                  }}
                />
                <label htmlFor="rd-31" className={Style.labelQuestionario}>
                  Pessoas de todos os níveis sociais e culturais
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-32"
                  value="d"
                  checked={Grupocheck8 === "d"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck8(evt.target.value);
                  }}
                />
                <label htmlFor="rd-32" className={Style.labelQuestionario}>
                  Sistemas e construção (material ou mental)
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.ContainerCheck}>
          <label>9)Antes de agir você analisa:</label>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-33"
                  value="a"
                  checked={Grupocheck9 === "a"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck9(evt.target.value);
                  }}
                />
                <label htmlFor="rd-33" className={Style.labelQuestionario}>
                  As vantagens imediatas
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-34"
                  value="b"
                  checked={Grupocheck9 === "b"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck9(evt.target.value);
                  }}
                />
                <label htmlFor="rd-34" className={Style.labelQuestionario}>
                  As experiências já vividas
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-35"
                  value="c"
                  checked={Grupocheck9 === "c"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck9(evt.target.value);
                  }}
                />
                <label htmlFor="rd-35" className={Style.labelQuestionario}>
                  As possibilidades futuras
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-36"
                  value="d"
                  checked={Grupocheck9 === "d"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck9(evt.target.value);
                  }}
                />
                <label htmlFor="rd-36" className={Style.labelQuestionario}>
                  As condições e consequências
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.ContainerCheck}>
          <label>10)Geralmente você prefere agir:</label>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-37"
                  value="a"
                  checked={Grupocheck10 === "a"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck10(evt.target.value);
                  }}
                />
                <label htmlFor="rd-37" className={Style.labelQuestionario}>
                  No calor do momento
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-38"
                  value="b"
                  checked={Grupocheck10 === "b"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck10(evt.target.value);
                  }}
                />
                <label htmlFor="rd-38" className={Style.labelQuestionario}>
                  Com segurança e conforme o costume
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-39"
                  value="c"
                  checked={Grupocheck10 === "c"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck10(evt.target.value);
                  }}
                />
                <label htmlFor="rd-39" className={Style.labelQuestionario}>
                  Quando está inspirado
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-40"
                  value="d"
                  checked={Grupocheck10 === "d"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck10(evt.target.value);
                  }}
                />
                <label htmlFor="rd-40" className={Style.labelQuestionario}>
                  Quando um problema o desafia
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.ContainerCheck}>
          <label>11)Em atividade em grupo, você prefere:</label>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-41"
                  value="a"
                  checked={Grupocheck11 === "a"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck11(evt.target.value);
                  }}
                />
                <label htmlFor="rd-41" className={Style.labelQuestionario}>
                  As desafiadoras, que exigem ação rápida
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-42"
                  value="b"
                  checked={Grupocheck11 === "b"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck11(evt.target.value);
                  }}
                />
                <label htmlFor="rd-42" className={Style.labelQuestionario}>
                  Administrar os recursos disponíveis
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-43"
                  value="c"
                  checked={Grupocheck11 === "c"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck11(evt.target.value);
                  }}
                />
                <label htmlFor="rd-43" className={Style.labelQuestionario}>
                  Motivar as pessoas para darem o melhor de si
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-44"
                  value="d"
                  checked={Grupocheck11 === "d"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck11(evt.target.value);
                  }}
                />
                <label htmlFor="rd-44" className={Style.labelQuestionario}>
                  Descartar logo o que não funciona
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.ContainerCheck}>
          <label>12)Liderar é uma atividade que gosta de exercer:</label>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-45"
                  value="a"
                  checked={Grupocheck12 === "a"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck12(evt.target.value);
                  }}
                />
                <label htmlFor="rd-45" className={Style.labelQuestionario}>
                  Por pouco tempo e dependendo da situação
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-46"
                  value="b"
                  checked={Grupocheck12 === "b"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck12(evt.target.value);
                  }}
                />
                <label htmlFor="rd-46" className={Style.labelQuestionario}>
                  Quando pode comandar do começo ao fim
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-47"
                  value="c"
                  checked={Grupocheck12 === "c"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck12(evt.target.value);
                  }}
                />
                <label htmlFor="rd-47" className={Style.labelQuestionario}>
                  Quando é preciso identificar e reunir talentos
                </label>
              </div>
            </div>
          </div>
          <div className={Style.blockCheck}>
            <div className={Style.divCheck}>
              <div className={Style.divInputCheck}>
                <input
                  id="rd-48"
                  value="d"
                  checked={Grupocheck12 === "d"}
                  type="radio"
                  onChange={(evt) => {
                    setcheck12(evt.target.value);
                  }}
                />
                <label htmlFor="rd-48" className={Style.labelQuestionario}>
                  Quando o raciocínio estratégico é necessário
                </label>
              </div>
            </div>
          </div>
        </div>
        <br />
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
};
export default Questionario;
