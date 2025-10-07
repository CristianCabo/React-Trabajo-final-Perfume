import { useContext } from "react"
import "./CartWidget.css"
import { CarritoContext } from "../../Context/CarritoContext"
import { Link } from 'react-router-dom'

function CartWidget() {
const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png" 
  const {cantidadTotal} = useContext(CarritoContext)
return (
    
  
      <>
      <Link to="/cart" className="cartContainer">
      <img className="imgCarrito" src={imgCarrito} alt="Carrito de las Compras" />
      <span className="cantidad">{
        cantidadTotal > 0 && <strong className="number">{cantidadTotal}</strong>
      }
      </span>
      
      </Link>
    
     
      </>
  )
}

export default CartWidget