import NavBar from "../components/navBar";
import '../App.css';
import { useState, useEffect } from "react";
import imagenes from '../assets/imagenes'
import ContenedorPresentacion from "../components/contenedorPresentacion";
import OptionsPresentacion from "../components/optionsPresentacion";
import videos from '../assets/videos';

function LadingPages() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => { 
        const timer = setTimeout(() => {
            handleNext();
        }, 5000);

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <>
            <NavBar />

            <main className="contenedor-landing">

                <div className="contenedor-slider">
                    <div className="contenedor-imagen-botones" >
                        <button onClick={handlePrev}>
                            <svg width="35px" height="auto" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg"><path d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z" /><path d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z" /></svg>
                        </button>
                        <button onClick={handleNext}>
                            <svg width="35px" height="auto" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg"><path d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z" /><path d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z" /></svg>
                        </button>
                    </div>
                    <div className="contendor-imagen">
                        {imagenes.map((imagenes, i) => (
                            <img
                                key={i}
                                className={
                                    index === i ? "imagen-slider activo" : "imagen-slider"}
                                src={imagenes}
                                alt={`imagenes ${i + 1}`}
                            />))}
                    </div>
                </div>

                {videos.map((video, i) => (
                    <ContenedorPresentacion
                        key={i}
                        video={video.video}
                        titulo={video.titulo}
                        descripcion={video.descripcion}
                    />
                ))}

            </main>

        </>

    )
}

export default LadingPages