import imagen1 from "./../assets/images/imagen1.jpg";
import "./SumarNumeros.css";

function SumarNumeros() {
  const sumar = (n1, n2) => {
    var resultado = n1 + n2;
    console.log("La suma es: " + resultado);
  };

  return (
    <div>
      <h1>Sumar numeros Component</h1>
      <img src={imagen1} alt="imagen" width="200px" height="200px" />
      <br />
      <button onClick={() => sumar(7, 3)}>Sumar 7 + 3</button>
      <button onClick={() => sumar(4, 8)}>Sumar 4 + 8</button>
    </div>
  );
}

export default SumarNumeros;
