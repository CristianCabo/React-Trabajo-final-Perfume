import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import "../ItemDetail/ItemDetail.css"

import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import { toast } from "react-toastify"



const ItemDetail = ({id, nombre,precio,diseñador, description, img, stock, })=>{

    

    //Estado local con la cantidad de Productos agregados
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const {agregarAlCarrito} = useContext(CarritoContext)

    //Funcion que maneja la Cantidad de Productos
    const manejadorCantidad = (cantidad)=>{
        setAgregarCantidad(cantidad);
        

        //Creamos un Objeto con item y cantidad
        const item = {id, nombre, precio}
        agregarAlCarrito(item, cantidad);
        toast.success("Su Compra fue Enviada al Carrito ! Muchas Gracias"), {autoClose: 1000, theme:"dark", position: "top-right"}
    }


    return(
        <div className="DetailContainer">
            <img className="imgDetail" src={img} alt={nombre} />
            <section className="sectionContainer">
                <h2 className="titleDetail">{nombre}</h2>
                <small className="diseñadorDetail">{diseñador}</small>
                <p className="descriptionDetail">{description}</p>
                <h3 className="precioDetail">${precio}</h3>
           
            
           
                <span className="contadorContainer">
                {
                    agregarCantidad > 0 ?(<Link className="finalizarCompra" to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            




                }
                </span>
            </section>
       </div>
        


    )

}

export default ItemDetail