import '../components/contenedorPresentacion.css'
import { useState, useEffect } from 'react';
import videos from '../assets/videos';

function ContenedorPresentacion() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % videos.length);
        }, 15000);

        return () => clearTimeout(timer);
    }, [index, videos.length]);


    const getRelativeIndex = (i) => {
        const relative = (i - index + videos.length) % videos.length;
        return relative > Math.floor(videos.length / 2)
            ? relative - videos.length
            : relative;
    };

    return (
        <div className="contenedor-presentacion-slider">
            <button onClick={handlePrev} className="btn-video-switch btn-prev">
                <svg width="35px" height="auto" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg"><path d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z" /><path d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z" /></svg>
            </button>

            <div className="contenedor-presentacion-video">
                {videos.map((video, i) => {
                    const relativeIndex = getRelativeIndex(i);

                    return (
                        <video
                            key={i}
                            src={video.video}
                            controls
                            loop
                            muted={relativeIndex !== 0}
                            autoPlay={relativeIndex === 0}
                            className={`video-presentacion ${relativeIndex === 0 ? "activo" : `posicion-${relativeIndex}`}`}
                        />
                    );
                })}
            </div>

            <button onClick={handleNext} className="btn-video-switch btn-next">
                <svg width="35px" height="auto" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg"><path d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z" /><path d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z" /></svg>
            </button>

        </div>
    );
}

export default ContenedorPresentacion;
