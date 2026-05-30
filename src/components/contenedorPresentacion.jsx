import '../components/contenedorPresentacion.css'

function ContenedorPresentacion(props) {
    const { video, titulo, descripcion } = props;

    return (
        <div className="contenedor-presentacion">

            <div className="contenedor-imagen-presentacion">
                <video src={video} controls autoPlay loop ></video>
            </div>

            <div className="contenedor-info-presentacion">

                <div className="contenedor-titulo-presentacion">
                    <h2>{titulo}</h2>
                </div>

                <div className="contenedor-descripcion-presentacion">
                    <p>{descripcion}</p>
                </div>

            </div>

        </div>
    );
}

export default ContenedorPresentacion;