function Matematicas(props) {
  var numero = props.numero;
  var tripleNumero = props.tripleNumero;

  const dobleNumero = () => {
    var resultado = parseInt(numero) * 2;
    console.log(resultado);
  };

  return (
    <div>
      <h1 style={{ color: "blue" }}>Matematicas hijo: {numero}</h1>
      <button onClick={() => dobleNumero()}>Boton doble {numero}</button>
      <button onClick={() => tripleNumero(numero)}>
        Boton triple {numero}
      </button>
    </div>
  );
}
export default Matematicas;
