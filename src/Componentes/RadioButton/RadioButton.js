import React from "react";
import Style from "./RadioButton.module.css";

function RadioButton(props) {
  let LetraAlternativa = "";
  LetraAlternativa = props.LetraAlternativa;
  let GrupocheckBox = "";
  GrupocheckBox = props.GrupocheckBox;
  const Texto = props.TextoLabel;
  const Funcao = props.Funcao;
  const value = props.value;
  return (
    <div className={Style.blockCheck}>
      <div className={Style.divCheck}>{Texto}</div>
      <div className={Style.divInputCheck}>
        <input
          checked={GrupocheckBox === "c"}
          type="radio"
          onChange={(evt) => {
            Funcao(evt.target.value);
          }}
          value={value}
        />
      </div>
    </div>
  );
}
export default RadioButton;
