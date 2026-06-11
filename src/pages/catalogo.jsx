import NavBar from "../components/navBar"
import '../App.css'
import Footer from "../components/footer";
import CardProducto from "../components/cardProducto";

import Productos from "../assets/productosPresentacion";

function Catalogo() {
    return (

        <>
            <NavBar />

            <main className="contenedor-catalogo">

                <section className="contenedor-caja">

                    <section className="contenedor-buscador">

                        <div>

                            <form action="">
                                <input className="input-buscar" type="search" name="" id="" />
                                <input className="button-buscar" type="submit" value="Buscar" />
                            </form>

                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z" fill="#0D0D0D" /></svg>

                        </div>

                    </section>

                    <section className="contenedor-productos">

                        <div className="contendor-producto-grid">

                            {Productos.map((producto, i) => (
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