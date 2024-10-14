import { useState } from "react";

function Car(props) {
  //vamos a crear una variable que nos permitira visualizar el estado del coche
  const [estado, setEstado] = useState(false);
  //vamos a tener una varible para visualizar la velocidad actual del coche
  const [velocidad, setVelocidad] = useState(0);
  //CREAMOS UN OBJETO CUYAS PROPIEDADES VENDRAN DEFINIDAS EN LA ETIQUETA DEL PARENT
  var coche = {
    marca: props.marca,
    modelo: props.modelo,
    velocidadMax: parseInt(props.velocidadmax),
    aceleracion: parseInt(props.aceleracion),
  };
  //incluimos un metodo para comprobar el estado del coche dependiendo de dicho estado, lo que haremos sera devolver codigo html
  const comprobarEstado = () => {
    if (estado == true) {
      return <h1 style={{ color: "green" }}>Arrancado</h1>;
    } else {
      return <h1 style={{ color: "red" }}>Detenido</h1>;
    }
  };
  //creamos un metodo para cambiar la aceleracion del coche
  const acelerarCoche = () => {
    if (estado == false) {
      alert("El coche esta detenido");
      setVelocidad(0);
    } else {
      if (velocidad >= coche.velocidadMax) {
        //ponemos la velocidad maxima
        setVelocidad(coche.velocidadMax);
      } else {
        //cambiamos la velocidad junto a su aceleracion+
        setVelocidad(velocidad + coche.aceleracion);
      }
    }
  };
  return (
    <div>
      <h1 style={{ color: "blue" }}>
        Component Car: {coche.marca}, {coche.modelo}
      </h1>
      <h2 style={{ color: "pink" }}>Velocidad actual: {velocidad} km/h</h2>
      <div>{comprobarEstado()}</div>
      <button
        onClick={() => {
          //modificar el estado para que cambie ek dibujo
          setEstado(!estado);
        }}
      >
        Arrancar/Detener
      </button>
      <button onClick={() => acelerarCoche()}>Acelerar coche</button>
    </div>
  );
}

export default Car;
