import React from "react";
import Style from "./RespostaD.module.css";
function RespostaD() {
  return (
    <div className={Style.DivRespostaGeral}>
      <div className={Style.DivSucesso}>
        <div className={Style.Sucesso}>
          <strong>Muito bem!!! Maior pontuação em C </strong>
          <br />
          <strong href="#">
            São intuitivos como os C, mas, em vez de se preocupar com pessoas,
            costumam focar seus interesses em grandes áreas do conhecimento,
            como ciência e tecnologia. Apresentam notável capacidade para
            identificar problemas concretos e resolvê-los, bem como para o
            raciocínio abstrato.
            <br /> Carreiras mais apropriadas: <br />
            Analista de sistemas, Criador de software, Designer industrial,
            Economista, Engenheiro.
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
          <div className={Style.ImgCursosSistemas}></div>
          <div className={Style.ImgCursosContabeis}></div>
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
export default RespostaD;
