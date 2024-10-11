import imagen1 from "./../assets/images/imagen1.jpg";
import "./SumarNumeros.css";

function SumarNumeros(props) {
  const sumar = (n1, n2) => {
    //var resultado = n1 + n2;
    var resultado = parseInt(props.numero1) + parseInt(props.numero2);
    console.log("La suma es: " + resultado);
  };

  return (
    <div>
      <h1>Sumar numeros Component</h1>
      <img src={imagen1} alt="imagen" width="200px" height="200px" />
      <br />
      <button onClick={() => sumar(2, 4)}>
        Sumar {props.numero1} + {props.numero2}
      </button>
      <button onClick={() => sumar(5.9)}>
        Sumar {props.numero1} + {props.numero2}
      </button>
    </div>
  );
}

export default SumarNumeros;
