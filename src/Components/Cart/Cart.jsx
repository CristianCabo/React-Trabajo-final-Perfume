import { useContext } from "react"; 
import { CarritoContext } from "../../Context/CarritoContext";
import { Link } from "react-router-dom";        
import CartItem from "../CartItem/CartItem";
import "../Cart/Cart.css"


const Cart = () => {
    const{carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0) {
        return(
            <>
            <div className="defaultContainer">
            <h2 className="comprarTitle">Aca no hay ningun producto ! Compra algo :D</h2>
            <Link className="verProductos" to="/">Ver Productos</Link>
            </div>
            </>
        )
    }
    return(
        <div>
            {
                carrito.map(producto => <CartItem key={producto.id} {...producto}/>)
            }
            <div className="totalContainer">
                <h3 className="cantidadTotal">Cantidad Total: {cantidadTotal}</h3>
                <h3>Total a Pagar: ${total}</h3>
                <button className="vaciarCarrito" onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
                <Link className="buttonFinalizarCompra" to={"/checkout"}> Finalizar Compra</Link>
            </div>
        </div>
    )
}   

export default Cart