import '../components/cardProducto.css'
import { useNavigate } from 'react-router-dom';

function CardProducto(props) {
    const { id, titulo, imagen } = props
    const navigate = useNavigate();

    return (
        <div className='contenedor-producto-card' onClick={() => navigate(`/producto/${id}`)} >

            <div className='contenedor-titulo-card'>
                <h2>
                    {titulo}
                </h2>
            </div>

            <div className='contenedor-imagen-card'>
                <img src={imagen} alt={`Imagen del producto: ${titulo}`} />
            </div>

        </div>
    )
}

export default CardProducto;