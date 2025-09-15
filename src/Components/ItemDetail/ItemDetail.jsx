import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import "../ItemDetail/ItemDetail.css"



const ItemDetail = ({id, nombre,precio, img, stock})=>{

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const manejadorCantidad = (cantidad)=>{
        setAgregarCantidad(cantidad);
    }


    return(
        <div className="DetailContainer">
            <img className="imgDetail" src={img} alt={nombre} />
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            <h3>id:{id} </h3>
        
        <p>lorefafasfasfasfasfasfasf</p>
        {
            agregarCantidad > 0 ?(<Link to="/cart">Terminar Compra</Link>) : <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>


        }
        
       </div>
        


    )

}

export default ItemDetail