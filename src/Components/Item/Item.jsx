import "../Item/Item.css"
import { Link } from "react-router-dom"

const Item =({id, nombre, precio, img}) =>{

    
    return(
        
        <div className="cardProducto">
            <img className="imgItem" src={img} alt={nombre} />
            <h3 className="title-item">{nombre}</h3>
            <h4 className="precio-item">Precio: ${precio}</h4>
            <p className="id-item">Id:{id} </p>
            <Link to={`/item/${id}`}><button className="buttonItem">Ver Detalles</button></Link>
        </div>
        
    )
}

export default Item