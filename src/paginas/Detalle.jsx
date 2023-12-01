import { useParams } from 'react-router-dom';
import { libros } from "../BDH.json";
import style from "./Detalle.module.css"

import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Routes,
    Link
  } from "react-router-dom";

export default function Detalle() {
  const { id } = useParams();

  // Buscar el monstruo por el id
  const libroSeleccionado = libros.find(libro => libro.id_BNE === id);

  // Si no se encuentra el monstruo, puedes mostrar un mensaje de error o hacer algo más
  if (!libroSeleccionado) {
    return <div>No se encontró el libro con ID {id}</div>;
  }

  // Resto de tu lógica aquí
  return (
    <div>
        <Link className={style.linkback}  to="/BibliotecaReact/">
            🔙
        </Link>

      <div className={style.infoLibro}>
        <h2>{id}</h2>
        <h1>{libroSeleccionado.título}</h1>

        <p>editorial: {libroSeleccionado.editorial}</p>

        <h3>Publicación: {libroSeleccionado.fecha_publicacion}</h3>
        <h4>Autor: {libroSeleccionado.autor_entidades}</h4>

        <a target='blank' href={libroSeleccionado.version_digital.split(0)} className={style.boton}>Leer ahora</a>
      </div>
    </div>
  );
}