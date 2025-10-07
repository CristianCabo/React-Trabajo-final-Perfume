
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from "./Components/ItemListConteiner/ItemListContainer"
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarritoProvider } from './Context/CarritoContext'
import Cart from "./Components/Cart/Cart"
import Checkout from "./Components/Checkout/Checkout"
import  'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
  
      <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element ={<ItemListContainer/>} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
      </>
  )
}

export default App
