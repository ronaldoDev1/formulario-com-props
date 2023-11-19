import ExibirTexto from "../exibirTexto/ExibirTexto";
import { useState } from "react";
import "./Formulario.css";

const Formulario = () => {
  const [idade, setIdade] = useState("");
  return (
    <div>
      <form>
        <p id="text">informe sua idade</p>
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        ></input>
      </form>
      <ExibirTexto idade={idade} />
    </div>
  );
};

export default Formulario;
