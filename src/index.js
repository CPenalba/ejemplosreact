import SumarNumeros from "./components/SumarNumeros";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import SaludoPadre from "./components/SaludoPadre";
import PadreMatematicas from "./components/PadreMatematicas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <SumarNumeros numero1="5" numero2="8" /> */}
    {/* <SumarNumeros numero1="12" numero2="20" /> */}
    {/* <SaludoPadre /> */}
    <PadreMatematicas/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
