import React from "react";
import Style from "./RespostaC.module.css";
function RespostaC() {
  return (
    <div className={Style.DivRespostaGeral}>
      <div className={Style.DivSucesso}>
        <div className={Style.Sucesso}>
          <strong>Muito bem!!! Maior pontuação em C </strong>
          <br />
          <strong href="#">
            Facilmente reconhecíveis por seu entusiasmo e interesse nas relações
            humanas, as pessoas do tipo C têm na intuição o seu ponto forte.
            Muitas endereçam seu esforço e talento para o desenvolvimento
            intelectual de alunos e o conforto psicológicos de pacientes e
            colegas de trabalho.
            <br /> Carreiras mais apropriadas: <br />
            Educador, Professor, Psicólogo, Pedagogo, Nutricionista
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
          <div className={Style.ImgCursosPedagogia}></div>
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
export default RespostaC;
