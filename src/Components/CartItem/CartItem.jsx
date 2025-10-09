import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import "../CartItem/CartItem.css"
import { toast } from "react-toastify"


const CartItem = ({item, cantidad, img}) => {
    const { eliminarProducto} = useContext(CarritoContext)
    


    return(

        <div className="CartItemContainer">
            <img src={img} alt="" />
            <h4 className="CartItemTitle">{item.nombre}</h4>
            
            <p className="CartItemCantidad">Cantidad: {cantidad}</p>
            <p className="CartItemPrecio">Precio: ${item.precio}</p>
            <button className="buttonEliminar"  onClick={()=>eliminarProducto(item.id) }>ELiminar</button>


        </div>
    )
}

export default CartItem