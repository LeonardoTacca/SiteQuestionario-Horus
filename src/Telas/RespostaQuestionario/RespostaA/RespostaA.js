import React from "react";
import Style from "./RespostaA.module.css";

function RespostaA() {
  return (
    <div className={Style.DivRespostaGeral}>
      <div className={Style.DivSucesso}>
        <div className={Style.Sucesso}>
          <strong>Muito bem!!! Maior pontuação em A </strong>
          <br />
          <strong href="#">
            A principal caracteristica dos tipos A é o movimento. Gostam de
            novidade, apresentam destreza fisica e boa expressão corporal.
            Pessoas do tipo A não gostam de rotina e veem o trabalho como uma
            grande fonte de prazer.
            <br /> Carreiras mais apropriadas: <br />
            Esportista, Ator, Personal treiner, Dançarino, Publicitario ou
            Relações publicas
          </strong>
        </div>
      </div>
      <div>
        <div className={Style.DivEnunciadoCursos}>
          <h5 className={Style.h5}>
            Conheça alguns dos nossos cursos que com certeza vão te agradar
          </h5>
        </div>
        <div className={Style.ContainerImgCursos}>
          <div className={Style.ImgCursosEdf}></div>
          <div className={Style.ImgCursosDanca}></div>
        </div>
        <div className={Style.DivEnunciadoinscricaoSite}>
          <h5>
            Inscrições Abertas!!!
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc184QKf2iofjzoNE4zrp2fJ4eLjCxeEYar9p-XRXFi8l4NBw/viewform?usp=pp_url">
              Clique Aqui para fazer sua inscrição
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}
export default RespostaA;
