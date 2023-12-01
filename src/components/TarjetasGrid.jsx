import Tarjeta from "../components/Tarjeta";
import { libros } from "../BDH.json";
import style from "./TarjetasGrid.module.css"

export default function TarjetasGrid() {
    return (
        <section className={style.seccionConFondo}>
            <h1>📚Biblioteca📚</h1>
            <div className={style.fondoConBlur}></div>
            <ul className={style.lista}>
                {libros.map((libro) => (
                    // eslint-disable-next-line react/jsx-key
                    <Tarjeta key={libro.id_BNE} libro={libro} />
                ))}
            </ul>
        </section>
    );
}