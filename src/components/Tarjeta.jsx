/* eslint-disable react/prop-types */
import style from "./Tarjeta.module.css";

import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Routes,
  Link
} from "react-router-dom";

export default function Tarjeta({ libro }) { 
  return (
    <Link key={libro.id_BNE} className={style.link}  to={`Detalle/${libro.id_BNE}`}>
      <li className={style.producto}>
        <h4>{libro.título}</h4>
        <h5>{libro.autor_entidades}</h5>

        <h6>Editorial: {libro.editorial}</h6>
      </li>
    </Link>
  );
}