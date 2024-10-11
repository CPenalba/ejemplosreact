function SaludoHijo(props) {
  //capturamos en una variable el motod del parent que viene en props
  var ejecutarPadre = props.metodoPadre;
  var idhijo = props.idhijo;
  return (
    <div>
      <h1 style={{ color: "blue" }}>Saludo hijo</h1>
      <button onClick={() => ejecutarPadre("Carolina " + idhijo)}>
        Llamar al parent
      </button>
    </div>
  );
}
export default SaludoHijo;
