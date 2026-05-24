import logo from '../assets/logo.png';
import '../Components.css';
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav>
            <div className='contenedor-nav'>

                <div className='contenedor-logo-nav'>
                    <a title='Pagina de inicio'>
                        <img className='logo-nav' src={logo} title='Logo de la marca'></img>
                    </a>
                </div>

                <div>
                    <ul>
                        <Link to='/'>Inicio</Link>
                        <Link to='/catalogo'>Tienda</Link>
                        <Link to='/about'>Sobre mi</Link>
                    </ul>
                </div>

            </div>
        </nav>
    )

}

export default NavBar