import '../components/navBar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
    const [menu, setMenu] = useState(true)
    

    return (
        <header>
            <nav className='nav-main'>

            <div className='contenedor-nav'>

                    <div className="contenedor-filtro">

                        <svg onClick={() => setMenu(false)} className={menu ? 'filtro-logo' : 'filtro-logo oculto'} viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
                            <g>
                                <rect x="6" y="22" width="36" height="4" />
                                <rect x="6" y="10" width="36" height="4" />
                                <rect x="6" y="34" width="36" height="4" />
                            </g>
                        </svg>

                        <svg onClick={() => setMenu(true)} className={menu ? 'filtro-logo-cerrar' : 'filtro-logo-cerrar activo'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 5L5 19" stroke-width="2" stroke-linecap="round" />
                            <path d="M5 5L19 19" stroke-width="2" stroke-linecap="round" />
                        </svg>

                    </div>

                <div className='contenedor-logo-nav'>

                    <a title='Pagina de inicio'>
                            <svg className='logo-svg' viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">
                                <text
                                    x="50%"
                                    y="50%"
                                    dominant-baseline="middle"
                                    text-anchor="middle"
                                    fill="#FFFFFF"
                                    font-size="180"
                                    font-family="Georgia, serif"
                                    font-weight="bold"
                                >
                                    Brénshe
                                </text>
                            </svg>
                    </a>

                    </div>

                </div>

            </nav>

            <nav className={menu ? 'nav-link' : 'nav-link cerrado'}>

                <div className='contenedor-link'>

                    <ul>
                        <Link to='/'>Inicio</Link>
                        <Link to='/catalogo'>Tienda</Link>
                        <Link to='/about'>Sobre mi</Link>
                    </ul>

                </div>

        </nav>


        </header>
    )

}

export default NavBar