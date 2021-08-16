import React, { useEffect, useState } from 'react'
import Style from "./ListagemQuestionario.module.css";

import Axios from 'axios';


function ListagemQuestionario() {
    const [dadosapis, setdados] = useState([])
    const token = sessionStorage.getItem("token")
 
    useEffect(() => {
        setTimeout(() => {Axios.get("https://globalsoft-solucoes.com.br:2259/Resposta/ListarRespostas", {
            headers: { "authorization": `${token}` },
        }).then((response) => {
            setdados(response.data)
           
        })                        }, 3000);
       
    }, [dadosapis])
    
    return (
        <div className={Style.DivGeralListagemQuestionario}>
            <div className={Style.ContainerListagemQuestionario}>
                <div className={Style.ContainerEnunciadoListagem}>
                    <h4 className={Style.TextoContainerEnunciado}>A listagem abaixo contem as respostas dos alunos que preencheram o fomulario</h4>
                </div>
                <div>
                    <ul>
                        {
                            dadosapis.map(dados => (
                                <li>
                                    <div className={Style.ContainerDadosListagemLista} key={dados.idresposta}><h1 className={Style.TextoListagemDados}>Nome: {dados.nome}, Cidade: {dados.cidade},<br /> Telefone: {dados.telefone}, Resposta: {dados.resposta}</h1></div>
                                </li>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ListagemQuestionario;
