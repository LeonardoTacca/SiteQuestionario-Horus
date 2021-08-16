import Style from "./Appbar.module.css";
import React from "react";
import { History } from "../../../src/History";
function AppBar() {
  const goLogin = () => {
    History.push("/Login");
  };
  return (
    <div className={Style.NavBar}>
      <div className={Style.divBotaoLogin}>
        <button onClick={goLogin} className={Style.BotaoFazerLogin}>
          <h5 style={Style.h5BtnLogin}>Fazer Login</h5>
        </button>
      </div>
      <div className={Style.DivTitulo}>
        <h1 className="h1">Questionário Horus Faculdades</h1>
      </div>
    </div>
  );
}
export default AppBar;
