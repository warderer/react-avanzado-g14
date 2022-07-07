/*** INSTRUCCIONES PARA EMPEZAR ***/
// 01. Crear su proyecto: npm init vite@latest 02-react-router -- --template react
// 02. Entrar a la carpeta en linea de comandos: cd 02-react-router
// 03. Instalar las depedencias: npm i
// 04. Instalar react router dom: npm i react-router-dom
// 05. Copiar el código de este archivo a su App.jsx
// 06. Opcional: Copiar estilos indicados en App.css a su proyecto
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            {/* En React no usamos la etiqueta A para los enlaces, ya que
            esta recargaría la página, entonces usamos el componente Link
            de React Router DOM en su lugar. Y en vez del atributo href usamos "to"*/}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portafolio">Portafolio</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        
        
        
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

function Error404() {
  let location = useLocation();
  return (
    <>
      <h1>Error404</h1>
      <p>No encontre: {location.pathname}</p>
      <p><Link to="/">Regresa al Home</Link></p>
    </>
  );
}

export default App;
