import { useParams } from "react-router-dom";
import Productos from "../assets/productosPresentacion";

import NavBar from "../components/navBar";

function DetalleProducto() {
    const { id } = useParams();

    const producto = Productos.find(
        (p) => p.id.toString() === id
    );

    if (!producto) {

        return (
            <>

                <NavBar />

                <div className="contenedor-error-detalle">
                    <h1>
                        404
                    </h1>

                    <span>
                        Producto no encontrado
                    </span>
                </div>

            </>
        )
    }

    return (
        <>
            <NavBar />

            <main className="contenedor-detalle-producto">

                <section className="contendor-detalle">

                    <section className="left">

                        <div>
                            <img src={producto.imagen} alt={`imagen del producto ${producto.titulo}`} />
                        </div>

                    </section>

                    <section className="rigth">

                        <div className="contenedor-titulo">
                            <h1>
                                {producto.titulo}
                            </h1>
                        </div>

                        <div className="contenedor-descripcion">
                            <p>
                                {producto.descripcion}
                            </p>

                            <p>
                                Precio: ${producto.precio}
                            </p>

                            <p>
                                Stock: {producto.stock}
                            </p>
                        </div>

                        <div className="contendor-boton-comprar">
                            <button>
                                Comprar
                            </button>
                        </div>

                    </section>

                </section>

            </main>

        </>
    )
}

export default DetalleProducto;