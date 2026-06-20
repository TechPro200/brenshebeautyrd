import { useParams } from "react-router-dom";
import Productos from "../assets/productosPresentacion";
import { useState } from "react";
import NavBar from "../components/navBar";

function DetalleProducto() {

    const [cantidad, setCantidad] = useState(1)

    const comprar = (producto) => {
        const numero = "18498805604";
        const mensaje = `Buenas, quiero comprar el producto: ${producto.titulo} cantidad: ${cantidad}`;

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    }

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

                            <div className="contenedor-cantidad-selector">
                                <p>
                                    Cantidad:
                                </p>

                                <button onClick={() => setCantidad(cantidad - 1)}>-</button>
                                <input type="number" name="cantidad" id="cantidad" placeholder={cantidad} />
                                <button onClick={() => setCantidad(cantidad + 1)}>+</button>

                            </div>
                        </div>

                        <div className="contendor-boton-comprar">
                            <button onClick={() => comprar(producto)}>
                                <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 32 32" xml:space="preserve">
                                    <path class="puchipuchi_een" d="M16,28c0,1.105-0.895,2-2,2s-2-0.895-2-2c0-1.105,0.895-2,2-2S16,26.895,16,28z M25,26
	c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2s2-0.895,2-2C27,26.895,26.105,26,25,26z M27,21H12.281l0.5,2H27c0.553,0,1,0.448,1,1
	s-0.447,1-1,1H12c-0.459,0-0.858-0.312-0.97-0.757L6.219,5H2C1.447,5,1,4.552,1,4s0.447-1,1-1h5c0.459,0,0.858,0.312,0.97,0.757
	L8.78,7h0.001H30c0.308,0,0.599,0.142,0.788,0.385s0.257,0.559,0.182,0.858l-3,12C27.858,20.688,27.459,21,27,21z M22,10
	c0,0.552,0.448,1,1,1s1-0.448,1-1c0-0.552-0.448-1-1-1S22,9.448,22,10z M18,10c0,0.552,0.448,1,1,1s1-0.448,1-1c0-0.552-0.448-1-1-1
	S18,9.448,18,10z M14,10c0,0.552,0.448,1,1,1s1-0.448,1-1c0-0.552-0.448-1-1-1S14,9.448,14,10z M12,10c0-0.552-0.448-1-1-1
	s-1,0.448-1,1c0,0.552,0.448,1,1,1S12,10.552,12,10z M14,14c0-0.552-0.448-1-1-1s-1,0.448-1,1c0,0.552,0.448,1,1,1S14,14.552,14,14z
	 M16,18c0-0.552-0.448-1-1-1s-1,0.448-1,1c0,0.552,0.448,1,1,1S16,18.552,16,18z M18,14c0-0.552-0.448-1-1-1s-1,0.448-1,1
	c0,0.552,0.448,1,1,1S18,14.552,18,14z M20,18c0-0.552-0.448-1-1-1s-1,0.448-1,1c0,0.552,0.448,1,1,1S20,18.552,20,18z M22,14
	c0-0.552-0.448-1-1-1s-1,0.448-1,1c0,0.552,0.448,1,1,1S22,14.552,22,14z M24,18c0-0.552-0.448-1-1-1s-1,0.448-1,1
	c0,0.552,0.448,1,1,1S24,18.552,24,18z M26,14c0-0.552-0.448-1-1-1s-1,0.448-1,1c0,0.552,0.448,1,1,1S26,14.552,26,14z M27,11
	c0.552,0,1-0.448,1-1c0-0.552-0.448-1-1-1s-1,0.448-1,1C26,10.552,26.448,11,27,11z"/>
                                </svg>
                                <p>Comprar</p>
                            </button>
                        </div>

                    </section>

                </section>

            </main>

        </>
    )
}

export default DetalleProducto;