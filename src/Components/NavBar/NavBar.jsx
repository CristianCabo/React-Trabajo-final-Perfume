import CartWidget from "../CartWidget/CartWidget"
import "../NavBar/NavBar.css"
import { Link, NavLink } from "react-router-dom"

function NavBar() {

  return (
  
      <>
      <header>
        <Link to="/">
        <img className="imgLogo" src= "./src/assets/logo.png" alt="Imagen de la empresa" />
        </Link>
      
      <nav>
        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><Link to="/categoria/perfumesmujer">Perfumes Mujer</Link></li>
            <li><Link to="/categoria/perfumeshombre">Perfumes Hombres</Link></li>
        </ul>
      </nav>
      <CartWidget></CartWidget>
      </header>
      
      </>
  )
}

export default NavBar
