import '../components/optionsPresentacion.css';
import productos from '../assets/productosPresentacion';

function OptionsPresentacion() {

    return (
        <div className="contenedor-presentacion-grid">
            {productos.map((producto, i) => {
                return (
                    <div key={i} className="contenedor-presentacion-opciones">
                            <div className="contenedor-info">
                                <h1>{producto.titulo}</h1>
                                <p>{producto.descripcion}</p>
                            </div>
                            <div className="contenedor-imagen">
                                <img src={producto.imagen} />
                            </div>
                            <div className="contenedor-botones">
                                <button className="boton-comprar">Comprar</button>
                            </div>
                    </div>
                )
            })}
        </div>
    )
}

export default OptionsPresentacion;