import '../components/optionsPresentacion.css';
function OptionsPresentacion(props) {
    const { imagen, titulo, descripcion } = props;

    return (
        <div className="contenedor-presentacion-opciones">
            <div className="contenedor-producto">
                <div className="contenedor-imagen">
                    <img src={imagen} alt={titulo} />
                </div>
                <div className="contendor-botones">
                    <button className="boton-comprar">Comprar</button>
                </div>
                <div className="contenedor-info">
                    <h1>{titulo}</h1>
                    <p>{descripcion}</p>
                </div>
            </div>
            <div className="contenedor-producto">
                <div className="contenedor-imagen">
                    <img src={imagen} alt={titulo} />
                </div>
                <div className="contendor-botones">
                    <button className="boton-comprar">Comprar</button>
                </div>
                <div className="contenedor-info">
                    <h1>{titulo}</h1>
                    <p>{descripcion}</p>
                </div>
            </div>
            <div className="contenedor-producto">
                <div className="contenedor-imagen">
                    <img src={imagen} alt={titulo} />
                </div>
                <div className="contendor-botones">
                    <button className="boton-comprar">Comprar</button>
                </div>
                <div className="contenedor-info">
                    <h1>{titulo}</h1>
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default OptionsPresentacion;