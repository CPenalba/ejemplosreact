import Matematicas from "./Matematicas";

function PadreMatematicas() {
  const tripleNumero = (valor) => {
    var resultado = parseInt(valor) * 3;
    console.log(resultado);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Padre matematicas</h1>
      {/* Desde props enviaremos el metodo del parent para que el hijo pueda realizar la llamada */}
      <Matematicas tripleNumero={tripleNumero} numero="5" />
      <Matematicas tripleNumero={tripleNumero} numero="2" />
    </div>
  );
}
export default PadreMatematicas;
