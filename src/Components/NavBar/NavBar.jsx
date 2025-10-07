import CartWidget from "../CartWidget/CartWidget"
import "../NavBar/NavBar.css"
import { Link, NavLink } from "react-router-dom"

function NavBar() {

  return (
  
      <>
      <header>
        <Link to="/" className="Link">
        <img className="imgLogo" src= "../public/LogoSinFondo.png" alt="Imagen de la empresa" />
        </Link>
      
      <nav>
        <ul>
            <li ><NavLink className="link" to="/">Inicio</NavLink></li>
            <li ><Link className="link" to="/categoria/perfumesmujer" >Perfumes Mujer</Link></li>
            <li ><Link className="link" to="/categoria/perfumeshombre" >Perfumes Hombres</Link></li>
        </ul>
      </nav>
      <CartWidget></CartWidget>
      </header>
      
      </>
  )
}

export default NavBar
