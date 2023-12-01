import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Detalle from './paginas/Detalle'
import TarjetasGrid from './components/TarjetasGrid'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link,
  // Link
} from "react-router-dom";

console.log(App);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route exact path="/BibliotecaReact/" element={<TarjetasGrid />} />
          <Route path="/BibliotecaReact/Detalle/:id" element={<Detalle />} />
          {/* <Route path="/ReactApp/filtro/:search?" element={<Filtro />} /> */}
        </Routes>
    </Router>
  </React.StrictMode>,
)
