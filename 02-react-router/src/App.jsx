/*** INSTRUCCIONES PARA EMPEZAR ***/
// 01. Crear su proyecto: npm init vite@latest 02-react-router -- --template react
// 02. Entrar a la carpeta en linea de comandos: cd 02-react-router
// 03. Instalar las depedencias: npm i
// 04. Instalar react router dom: npm i react-router-dom
// 05. Copiar el código de este archivo a su App.jsx
// 06. Opcional: Copiar estilos indicados en App.css a su proyecto

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/portafolio">Portafolio</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </nav>
        <Home />
        <Portafolio />
        <Contacto />
      </header>
    </div>
  );
}

function Home() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Home</h1>
    </>
  );
}

function Portafolio() {
  return (
    <>
      <h1>Portafolio</h1>
    </>
  );
}

function Contacto() {
  return (
    <>
      <h1>Contacto</h1>
    </>
  );
}

export default App;
