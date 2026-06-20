import NavBar from "../components/navBar"
import '../App.css'
import Footer from "../components/footer";
import CardProducto from "../components/cardProducto";
import { useState } from "react";
import Productos from "../assets/productosPresentacion";



function Catalogo() {

    const [busqueda, setBusqueda] = useState("");

    const productosFiltrados = Productos.filter((producto) =>
        producto.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (

        <>
            <NavBar />

            <main className="contenedor-catalogo">

                <section className="contenedor-caja">

                    <section className="contenedor-buscador">

                        <div>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <input placeholder="Encontrar producto..." className="input-buscar" type="search" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
                            </form>

                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z" fill="#0D0D0D" /></svg>

                        </div>

                    </section>

                    <section className="contenedor-productos">

                        <div className="contendor-producto-grid">

                            {productosFiltrados.length === 0 && (
                                <div className="sin-resultados">No se encontraron productos</div>
                            )}

                            {productosFiltrados.map((producto, i) => (
                                <CardProducto key={i} titulo={producto.titulo} imagen={producto.imagen} id={producto.id} />
                            ))}

                        </div>

                    </section>

                </section>

            </main>

            <Footer />
        </>

    )
}

export default Catalogo