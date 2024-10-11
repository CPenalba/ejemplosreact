import SaludoHijo from "./SaludoHijo";

function SaludoPadre() {
  //necesitamos un metodo en este codigo para que el hijo sea capaz de ejecutarlo
  const metodoPadre = (nombre) => {
    console.log("Yo soy: " + nombre);
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>Saludo padre</h1>
      {/* Desde props enviaremos el metodo del parent para que el hijo pueda realizar la llamada */}
      <SaludoHijo idhijo="1" metodoPadre={metodoPadre} />
      <SaludoHijo idhijo="2" metodoPadre={metodoPadre} />
      <SaludoHijo idhijo="3" metodoPadre={metodoPadre} />
    </div>
  );
}
export default SaludoPadre;
