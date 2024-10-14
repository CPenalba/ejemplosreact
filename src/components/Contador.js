//para poder utilizar useState debemois hacer un import de react
import { useState } from "react";

function Contador() {
  //declaramos una varibale de tipo state y en la creacion le indicamos el tipo de dato
  const [numero, setNumero] = useState(0);

  const sumarContador = () => {
    //para modificar el valor de una varibale de tipo state, se utiliza setVariable()
    setNumero(numero + 1);
  };

  return (
    <div>
      <h1 style={{ color: "blue" }}>Ejemplo contador state</h1>
      <h2 style={{ color: "red" }}>Contador {numero}</h2>
      <button onClick={() => sumarContador()}>Sumar contador</button>
      <button onClick={() => setNumero(numero - 1)}>Restar contador</button>
    </div>
  );
}

export default Contador;
