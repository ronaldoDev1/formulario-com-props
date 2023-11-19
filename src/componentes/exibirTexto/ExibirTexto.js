import "./ExibirTexto.css";

const ExibirTexto = (props) => {
  return (
    <div>
      <h1 id="texto">{props.idade}</h1>
    </div>
  );
};

export default ExibirTexto;
