import CartWidget from "../CartWidget/CartWidget"
import "../NavBar/NavBar.css"

function NavBar() {

  return (
  
      <>
      <header>
      <img src="" alt="Imagen de la empresa" />
      <nav>
        <ul>
            <li>Inicio</li>
            <li>Perfumes</li>
            <li>Sobre Nosotros</li>
            <li>Contacto</li>
        </ul>
      </nav>
      <CartWidget></CartWidget>
      </header>
      </>
  )
}

export default NavBar
