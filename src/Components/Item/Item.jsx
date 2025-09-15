import "../Item/Item.css"
import { Link } from "react-router-dom"

const Item =({id, nombre, precio, img}) =>{

    
    return(
        
        <div className="cardProducto">
            <img className="imgItem" src={img} alt={nombre} />
            <h3>{nombre}</h3>
            <h4>Precio: {precio}</h4>
            <p>Id:{id} </p>
            <Link to={`/item/${id}`}><button className="buttonItem">Ver Detalles</button></Link>
        </div>
        
    )
}

export default Item