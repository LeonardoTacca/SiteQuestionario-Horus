import React from "react";
import Style from "./RespostaB.module.css";

function RespostaB() {
  return (
    <div className={Style.DivRespostaGeral}>
      <div className={Style.DivSucesso}>
        <div className={Style.Sucesso}>
          <strong>Muito bem!!! Maior pontuação em B </strong>
          <br />
          <strong href="#">
            Comando e responsabilidade são duas palavras que definem as pessoas
            do tipo B. Elas gostam de lidar com fatos, quantidades, análises,
            organização e planejamento. Trabalham duro e preferem profissões que
            lhes proporcionem status e possibilidade de crescimento. São as mais
            presentes no mundo corporativo.
            <br /> Carreiras mais apropriadas: <br />
            Administrador, Advogado, Engenheiro, Juiz de direito, Contador
          </strong>
        </div>
      </div>
      <div>
        <div className={Style.DivEnunciadoCursos}>
          <h5>
            Conheça alguns dos nossos cursos que com certeza vão te agradar
          </h5>
        </div>
        <div className={Style.ContainerImgCursos}>
          <div className={Style.ImgCursosContabeis}>
            <img></img>
          </div>
          <div className={Style.ImgCursosDireito}></div>
        </div>
        <div className={Style.ContainerImgCursos}>
          <div className={Style.ImgCursosEngCivil}></div>
          <div className={Style.ImgCursosEngProd}></div>
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
export default RespostaB;
