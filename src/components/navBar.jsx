import '../components/navBar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavBar() {
    const [arriba, setArriba] = useState(true);
    const [menuManual, setMenuManual] = useState(false);

    useEffect(() => {
        const manejarScroll = () => {
            if (window.scrollY < 50) {
                setArriba(true);
                setMenuManual(false);
            } else {
                setArriba(false);
            }
        };

        window.addEventListener('scroll', manejarScroll);

        return () => {
            window.removeEventListener('scroll', manejarScroll);
        };
    }, []);

    const menuVisible = arriba || menuManual;

    return (
        <header>
            <nav className='nav-main'>
                <div className='contenedor-nav'>

                    <div className="contenedor-filtro">

                        {/* Hamburguesa */}
                        <svg
                            onClick={() => setMenuManual(true)}
                           className={!arriba && !menuManual ? 'filtro-logo' : 'filtro-logo oculto'}
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g>
                                <rect x="6" y="22" width="36" height="4" />
                                <rect x="6" y="10" width="36" height="4" />
                                <rect x="6" y="34" width="36" height="4" />
                            </g>
                        </svg>

                        {/* Botón cerrar */}
                        <svg
                            onClick={() => setMenuManual(false)}
                           className={!arriba && menuManual ? 'filtro-logo-cerrar activo' : 'filtro-logo-cerrar'}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 5L5 19"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M5 5L19 19"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                    </div>

                    <div className='contenedor-logo-nav'>
                        <a title='Pagina de inicio'>
                            <svg className='logo-svg' viewBox="0 0 1000 300">
                                <text
                                    x="50%"
                                    y="50%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    fill="#FFFFFF"
                                    fontSize="180"
                                    fontFamily="Georgia, serif"
                                    fontWeight="bold"
                                >
                                    Brénshe
                                </text>
                            </svg>
                        </a>
                    </div>

                </div>
            </nav>

            <nav className={menuVisible ? 'nav-link' : 'nav-link cerrado'}>
                <div className='contenedor-link'>
                    <ul>
                        <div>
                            <Link to='/'>Inicio</Link>
                        </div>

                        <div>
                            <Link to='/catalogo'>Tienda</Link>
                        </div>

                        <div>
                            <Link to='/about'>Sobre mi</Link>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;